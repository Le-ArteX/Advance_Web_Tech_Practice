import { Injectable,forwardRef,Inject } from '@nestjs/common';
import { read } from 'fs';
import { EnrollmentService } from 'src/enrollment/enrollment.service';

@Injectable()
export class NotificationService {
    constructor(
        @Inject(forwardRef(()=>EnrollmentService))
        private readonly enrollmentService : EnrollmentService
    ) {}
public sendNotification ( StudentName : string, message : string ) : object | undefined {
    return { message: `Notification sent to ${StudentName} with message: ${message}` } 
}

public checkEnrollmentStatus ( StudentName : string,courseId : string ) : object | undefined {
    const enrollmentStatus = this.enrollmentService.getEnrollments(); 
    return { message: `Enrollment status for ${StudentName} in course ${courseId} is fetched successfully`, data: enrollmentStatus }  
}
}