// interfaces
import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _products: CartItem[] = [];

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

  total(): number {
    return Number(this._products.reduce((acc, current) => acc + current.price, 0).toFixed(2));
  }

  isCartEmpty(): boolean {
    if (this._products.length === 0) return true;
    return false;
  }

  clearCart() {
    this._products.length = 0;
  }
}
