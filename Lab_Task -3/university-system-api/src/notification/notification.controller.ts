import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
    constructor(private notificationService: NotificationService) {}


    @Post('send')
    sendNotification(@Body() body: { StudentName: string, message: string }) {
        return this.notificationService.sendNotification(body.StudentName, body.message);
    }

    @Post('check')
    checkNotification(@Body() body: { StudentName: string, courseId: string }) {
        return this.notificationService.checkEnrollmentStatus(body.StudentName, body.courseId);
    }
}