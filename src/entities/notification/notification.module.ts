import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { NotificationsController } from './notification.controller';
import { NotificationService } from './notification.services';

@Module({
    imports: [ConfigModule],
    controllers: [NotificationsController],
    providers: [NotificationService],
    exports: [],
})
export class NotificationModule { }