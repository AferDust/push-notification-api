import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './entities/notification/notification.module';

@Module({
  imports: [ConfigModule.forRoot({ cache: true }), NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
