import { Module } from '@nestjs/common';
import { RecurringTransfersService } from './recurring-transfers.service';
import { RecurringTransfersController } from './recurring-transfers.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  providers: [RecurringTransfersService, UsersService],
  controllers: [RecurringTransfersController]
})
export class RecurringTransfersModule {}
