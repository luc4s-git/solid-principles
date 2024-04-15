type CartItem = {
  id: string;
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _products: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addProduct(item: CartItem): void {
    this._products.push(item);
  }

  removeByIndex(index: number): void {
    this._products.splice(index, 1);
  }

  get products(): Readonly<CartItem[]> | string {
    if (this.isCartEmpty()) return 'You cart is currently empty.';
    return this._products;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return Number(this._products.reduce((acc, current) => acc + current.price, 0).toFixed(2));
  }

  checkout(): void {
    if (this.isCartEmpty()) {
      console.log('Your cart is currently empty');
      return;
    }

    this._orderStatus = 'closed';

    this.saveOrder();
    this.sendMessage('You order was send to the seller.');
    this.clearCart();
  }

  isCartEmpty(): boolean {
    if (this._products.length === 0) return true;
    return false;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  saveOrder(): void {
    console.log('Order saved successfully.');
  }

  clearCart() {
    this._products.length = 0;
  }
}

const newCart = new ShoppingCart();

newCart.addProduct({ id: 'nGo8QH6154', name: 'T-Shirt', price: 199 });
newCart.addProduct({ id: 'Mn03bO106Z', name: 'Basketball', price: 299.9998 });
newCart.addProduct({ id: 'qBf02W787r', name: 'Skate', price: 99 });
newCart.addProduct({ id: 'y6X92U9ChH', name: 'RTX 2060', price: 299.99 });

console.log(newCart.products);

newCart.checkout();

console.log(newCart.products);
