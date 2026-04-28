import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [TodoModule, PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
