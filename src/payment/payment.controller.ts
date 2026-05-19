import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Put,
  Param,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Body } from '@nestjs/common';
import { CreatePaymentDto } from './dpay/create-payment.dto';
import { CardEntity } from './payment.entity';

@Controller('card')
export class PaymentController {
  private readonly list: CardEntity[];

  constructor(private readonly paymentService: PaymentService) {
    this.list = [
      new CardEntity(1, '8379402768493764', true),
      new CardEntity(2, '8537802767835164', false),
      new CardEntity(3, '8379378368435764', false),
    ];
  }

  @Get()
  public findAll(): CardEntity[] {
    return this.list;
  }

  @Post()
  public create(@Body() dpay: CreatePaymentDto): string {
    this.list.push(
      new CardEntity(this.list.length + 1, dpay.cardNumber, dpay.isActive),
    );

    return 'Card created';
  }

  @Delete(':id')
  public delete(@Param('id') id: string): string {
    const index = this.list.findIndex((payment) => payment.id === +id);
    if (index != -1) {
      this.list.splice(index, 1);
    }

    return 'Card deleted';
  }

  @Patch()
  public update(): string {
    return 'Card updated';
  }

  @Put()
  public fullupdate(): string {
    return 'Card fully updated';
  }
}
