import { Controller, Get, Render, Post, Delete, Body, Param, Redirect, ParseIntPipe } from '@nestjs/common';

class CardEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly number: string,
    public readonly completed: boolean = false,
  ) {}
}

@Controller('payment')
export class PaymentController {
    private card: CardEntity[];

    constructor() {
    this.card = [
        new CardEntity(1, 'Task 1', `222.222.222.222`),
        new CardEntity(2, 'Task 2', `222.222.222.222`),
        new CardEntity(3, 'Task 3', `222.222.222.222`),
        new CardEntity(
        4,
        'Сделать домашнее задание',
        `222.222.222.222`,
        ),
    ];
    }

    @Get()
    @Render('payment')
    public getTodos() {
    return {
        card: this.card,
    };
    }

  @Post()
  @Render('payment')
  public addCard(@Body() body: CardEntity) {
    console.log(body);

    this.card.push(
      new CardEntity(
        this.card.length + 1,
        body.name,
        body.number,
        body.completed,
      ),
    );

    return {
      card: this.card,
    };
  }

  @Post('/delete/:id')
  // @Render('payment')
  @Redirect('/payment', 302)
  public deleteCard(@Param('id', ParseIntPipe) id: number) {
    this.card = this.card.filter((card) => card.id !== id);
    console.log(this.card)
    return {
      card: this.card,
    };
  }
  
}