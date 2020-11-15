import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RecurringTransfersModule } from './recurring-transfers/recurring-transfers.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    RecurringTransfersModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
