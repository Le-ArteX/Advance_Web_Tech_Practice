export declare class CourseService {
    private courses;
    getAllCourses(): object | undefined;
    getCourseById(id: string): object | undefined;
    createCourse(name: string, code: string): object | undefined;
}
