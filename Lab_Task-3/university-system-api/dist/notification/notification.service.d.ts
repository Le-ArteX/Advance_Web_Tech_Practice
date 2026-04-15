import { EnrollmentService } from 'src/enrollment/enrollment.service';
export declare class NotificationService {
    private readonly enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    sendNotification(StudentName: string, message: string): object | undefined;
    checkEnrollmentStatus(StudentName: string, courseId: string): object | undefined;
}
