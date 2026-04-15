import { NotificationService } from './notification.service';
export declare class NotificationController {
    private notificationService;
    constructor(notificationService: NotificationService);
    sendNotification(body: {
        StudentName: string;
        message: string;
    }): object | undefined;
    checkNotification(body: {
        StudentName: string;
        courseId: string;
    }): object | undefined;
}
