import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotificationService } from './notification.services';

@ApiTags("Notification")
@Controller("notification")
export class NotificationsController {
    constructor(private readonly notificationService: NotificationService) { }

    @Get('get-token')
    @HttpCode(HttpStatus.ACCEPTED)
    getToken(): any {
    }

    @Post('send')
    @HttpCode(HttpStatus.ACCEPTED)
    async sendPushNotification(@Body() notificationData: { userDeviceToken: string, title: string, body: string }): Promise<void> {
        await this.notificationService.sendPushNotification(
            notificationData.userDeviceToken,
            notificationData.title,
            notificationData.body
        );
    }
}