import { CourseService } from 'src/course/course.service';
import { NotificationService } from 'src/notification/notification.service';
export declare class EnrollmentService {
    private courseService;
    private notificationService;
    constructor(courseService: CourseService, notificationService: NotificationService);
    enrollStudent(studentName: string, courseId: string): {
        message: string;
        course: object | undefined;
    };
    getEnrollments(): {
        message: string;
        data: never[];
    };
    getEnrollmentById(id: string): {
        message: string;
        data: {
            id: string;
        };
    };
}
