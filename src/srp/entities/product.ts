import { CartItem } from './interfaces/cart-item';

export class Product implements CartItem {
  constructor(
    public id: string,
    public name: string,
    public price: number,
  ) {}
}
