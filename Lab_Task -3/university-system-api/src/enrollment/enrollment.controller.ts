import { Controller, Get,Post ,Body,Param} from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';


@Controller('enrollment')
export class EnrollmentController {
    constructor(private enrollmentService : EnrollmentService){}

    @Get()
    getAllEnrollments(){
        return this.enrollmentService.getEnrollments();
    }
     @Get(':id')
    getEnrollmentById(@Param('id') id: string){
        return this.enrollmentService.getEnrollmentById(id);
    }
    @Post()
    enrollStudent(@Body() body : { studentName: string, courseId: string}){
        return this.enrollmentService.enrollStudent(body.studentName, body.courseId);
    }
}
