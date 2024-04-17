export abstract class Discount {
  abstract calculate(price: number): number;
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return +(price - price * this.discount).toFixed(2);
  }
}

export class NinetyPercentDiscount extends Discount {
  private readonly discount = 0.9;

  calculate(price: number): number {
    return +(price - price * this.discount).toFixed(2);
  }
}

export class ZeroDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
