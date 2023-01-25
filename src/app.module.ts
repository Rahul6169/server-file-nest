import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantModule } from './merchants/merchant.module';


@Module({
  imports: [MerchantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
