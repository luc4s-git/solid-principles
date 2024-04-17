/*
  Open/Closed Principle
  Entities should be open for extension, yet closed to modification.
*/

import moment from 'moment';

import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistence } from './entities/persistence';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import { ZeroDiscount, FiftyPercentDiscount, NinetyPercentDiscount } from './entities/discounts';

const calculateFiftyPercentDiscount = new FiftyPercentDiscount();
const calculateNinetyPercentDiscount = new NinetyPercentDiscount();
const noDiscount = new ZeroDiscount();

const newCart = new ShoppingCart(noDiscount);

const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(newCart, messaging, persistence);

newCart.addProduct(new Product('nGo8QH6154', 'T-Shirt', 199));
newCart.addProduct(new Product('nGo8QH6154', 'T-Shirt', 199));
newCart.addProduct(new Product('Mn03bO106Z', 'Basketball', 299.9998));
newCart.addProduct(new Product('y6X92U9ChH', 'RTX 2060', 299.99));

console.log(calculateNinetyPercentDiscount.calculate(newCart.calculateTotal()));
console.log(newCart.calculateTotal());
