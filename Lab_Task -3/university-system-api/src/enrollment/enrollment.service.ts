import { forwardRef, Injectable,Inject } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { NotificationService } from 'src/notification/notification.service';


@Injectable()
export class EnrollmentService {
   constructor(private courseService : CourseService,
    @Inject(forwardRef(()=>NotificationService))
    private notificationService : NotificationService   
   ){}

   enrollStudent(studentName:string, courseId:string){
     const course = this.courseService.getCourseById(courseId);
   
   return {message: `Student ${studentName} enrolled in course with id ${courseId} successfully`, course: course} 

}
 getEnrollments(){
    return {message: "All enrollments fetched successfully", data: []}
 }

 getEnrollmentById(id: string) {

    return {message: `Enrollment with id ${id} fetched successfully`, data: {id}};
 }
}
