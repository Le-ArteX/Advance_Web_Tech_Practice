import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
 
    public getCourse(): string{
        return "get all courses are here"
    }

    public getCourseById(id:number): string{
        return `get course id ${id} from service`
    }

    public createCourse(): string{
        return "create course from service"
    }

    public updateCourseById(id: string): string{
        return `update course id ${id} from service`
    }

    public patchCourseById(id: string): string{
        return `patch course id ${id} from service`
    }

    public deleteCourseById(id: string): string{
        return `delete course id ${id} from service`
    }

}


