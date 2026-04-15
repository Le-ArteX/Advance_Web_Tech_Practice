import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    findAll(): {
        message: string;
        data: never[];
    };
    findOne(id: string): {
        message: string;
        id: string;
    };
    create(dto: CreateCourseDto): {
        message: string;
        data: CreateCourseDto;
    };
    update(id: string, dto: UpdateCourseDto): {
        message: string;
        id: string;
        data: UpdateCourseDto;
    };
    patch(id: string, dto: UpdateCourseDto): {
        message: string;
        id: string;
        updatedFields: string[];
    };
    remove(id: string): {
        message: string;
        id: string;
    };
    uploadFile(id: string, file: Express.Multer.File): {
        message: string;
        courseId: string;
        filename: string;
        path: string;
    };
}
