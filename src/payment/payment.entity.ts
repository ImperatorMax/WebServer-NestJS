export class CardEntity {
  public readonly id: number;
  public readonly cardNumber: string;
  public readonly isActive: boolean;

  constructor(id: number, cardNumber: string, isActive: boolean) {
    this.id = id;
    this.cardNumber = cardNumber;
    this.isActive = isActive;
  }
}
