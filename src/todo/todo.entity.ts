export class TodoEntity {
  public readonly id: number;
  public readonly title: string;
  public readonly completed: boolean;

  constructor(id: number, title: string, completed: boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
