export abstract class Discount {
  protected discount = 0;

  public calculate(price: number): number {
    return +(price - price * this.discount).toFixed(2);
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class NinetyPercentDiscount extends Discount {
  protected readonly discount = 0.9;
}

export class ZeroDiscount extends Discount {}
