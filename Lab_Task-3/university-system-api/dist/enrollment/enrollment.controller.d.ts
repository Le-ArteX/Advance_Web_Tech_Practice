import { EnrollmentService } from './enrollment.service';
export declare class EnrollmentController {
    private enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    getAllEnrollments(): {
        message: string;
        data: never[];
    };
    getEnrollmentById(id: string): {
        message: string;
        data: {
            id: string;
        };
    };
    enrollStudent(body: {
        studentName: string;
        courseId: string;
    }): {
        message: string;
        course: object | undefined;
    };
}
