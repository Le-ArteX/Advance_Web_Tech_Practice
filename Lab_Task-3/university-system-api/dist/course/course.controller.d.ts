import { CourseService } from './course.service';
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    getAllCourses(): object | undefined;
    getCourseById(id: string): object | undefined;
    createCourse(body: {
        name: string;
        code: string;
    }): object | undefined;
}
