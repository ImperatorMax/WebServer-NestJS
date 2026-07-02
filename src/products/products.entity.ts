export class ProductsEntity {
  public readonly id: number;
  public readonly title: string;
  public readonly description: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly isHave: boolean;

  constructor(
    id: number,
    title: string,
    description: string,
    createdAt: Date,
    updatedAt: Date,
    isHave: boolean,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isHave = isHave;
  }
}
