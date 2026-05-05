import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { PaymentModule } from './payment/payment.module';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [TodoModule, PaymentModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
