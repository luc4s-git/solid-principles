import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistence } from './persistence';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistence: Persistence,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isCartEmpty()) {
      console.log('Your cart is currently empty');
      return;
    }

    this._orderStatus = 'closed';

    this.persistence.saveOrder();
    this.messaging.sendMessage(`You order was placed with a total of ${this.cart.total()}.`);
    this.cart.clearCart();
  }
}
