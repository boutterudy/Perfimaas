import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RecurringTransfersModule } from './recurring-transfers/recurring-transfers.module';

@Module({
  imports: [UsersModule, RecurringTransfersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
