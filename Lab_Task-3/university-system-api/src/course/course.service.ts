import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
 
private courses : { name: string , code: string}[] = [
        {name:"course1", code:"c1"},
        {name:"course2", code:"c2"},
        {name:"course3", code:"c3"}
    ];
 public getAllCourses() : object | undefined{
     return { message: "All courses are fetched successfully", data:this.courses}
    //  data: [
    //     {id:1,name:"course1"},
    //     {id:2,name:"course2"},
    //     {id:3,name:"course3"}
    //  ] 
 }

 public getCourseById( id : string ) : object | undefined{
    return { message: `Course with id ${id} is fetched successfully`,id:id}
 }

 public createCourse ( name : string , code : string ) : object | undefined {
    const newCourse = { name,code };
    this.courses.push(newCourse);
    return { message: "Course created successfully", data: newCourse}

 }

 }


