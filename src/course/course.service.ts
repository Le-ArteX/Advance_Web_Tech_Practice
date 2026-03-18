import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';  
import path from 'path';


@Injectable()
export class CourseService {

    public getAllCourses() {
        return {message:"all courses fetched successfully",data:[]};
    }

   public getCourseById(id: string, postId?: string) {
    if (postId) {
        return { message: `course with id ${id} and post with id ${postId} fetched successfully`, id, postId };
    }
    return { message: `course with id ${id} fetched successfully`, id };
    }
    public createCourse(createCourseDto: CreateCourseDto){
        return {message:"course created successfully",data:createCourseDto};
    }
    public updateCourse(id: string, updateCourseDto: UpdateCourseDto)
    {
        return {message:`course with id ${id} updated successfully`,id,data:updateCourseDto};
    }
    public  patchCourse(id: string, updateCourseDto: UpdateCourseDto){
        return {message:`course with id ${id} patched successfully`,id,data:updateCourseDto};
    }

    public deleteCourse(id: string){
        return {message:`course with id ${id} deleted successfully`,id};
    }

    public uploadCourseMaterial(id: string, file: Express.Multer.File){
     
        return {message:`course material for course with id ${id} uploaded successfully`,id,filename:file.originalname,path:`uploads/${file.filename}`};
    }
}

