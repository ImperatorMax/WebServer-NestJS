import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { PaymentModule } from './payment/payment.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TodoModule,
    PaymentModule,
    ProductsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

