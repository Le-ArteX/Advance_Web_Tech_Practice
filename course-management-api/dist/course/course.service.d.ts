import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CourseService {
    getCourse(): {
        message: string;
        data: never[];
    };
    getCourseById(id: string): {
        message: string;
        id: string;
    };
    createCourse(dto: CreateCourseDto): {
        message: string;
        data: CreateCourseDto;
    };
    updateCourseById(id: string, dto: UpdateCourseDto): {
        message: string;
        id: string;
        data: UpdateCourseDto;
    };
    patchCourseById(id: string, dto: UpdateCourseDto): {
        message: string;
        id: string;
        updatedFields: string[];
    };
    deleteCourseById(id: string): {
        message: string;
        id: string;
    };
    uploadCourseMaterial(id: string, file: Express.Multer.File): {
        message: string;
        courseId: string;
        filename: string;
        path: string;
    };
}
