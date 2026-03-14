import { CourseService } from './course.service';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getCourse(): string;
    getCourseById(id: string): string;
    getCoursePosts(id: string, postId: string, name?: string): String;
    getCourseByTwoIds(id1: string, id2: string): string;
    createCourse(): string;
    updateCourseById(id: string): string;
    patchCourseById(id: string): string;
    deleteCourseById(id: string): string;
}
