import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class NotificationService {
    constructor() { }

    async sendPushNotification(token: string, title: string, body: string) {
        const message = {
            notification: {
                title,
                body,
            },
            token: token,
        };

        try {
            const response = await admin.messaging().send(message);
            console.log('Successfully sent message:', response);
            return response;
        } catch (error) {
            console.log('Error sending message:', error);
            throw error;
        }
    }
}