import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { TodoModule } from './todo/todo.module';
import { PaymentModule } from './payment/payment.module';
import { MarketModule } from './market/market.module';

@Module({
  imports: [TodoModule, PaymentModule, MarketModule],
  controllers: [AppController],
})
export class AppModule {}

