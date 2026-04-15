import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {


  public getCourse() {
    return {
      message: "All courses fetched successfully",
      data: []
    };
  }

  public getCourseById(id: string) {
    return {
      message: "Course fetched successfully",
      id: id
    };
  }


  public createCourse(dto: CreateCourseDto) {
    return {
      message: "Course created successfully",
      data: dto
    };
  }


  public updateCourseById(id: string, dto: UpdateCourseDto) {
    return {
      message: "Course updated successfully",
      id: id,
      data: dto
    };
  }

  public patchCourseById(id: string, dto: UpdateCourseDto) {
    return {
      message: "Course patched successfully",
      id: id,
      updatedFields: Object.keys(dto)
    };
  }


  public deleteCourseById(id: string) {
    return {
      message: "Course deleted successfully",
      id: id
    };
  }


  public uploadCourseMaterial(id: string, file: Express.Multer.File) {
    return {
      message: "Material uploaded successfully",
      courseId: id,
      filename: file.filename,
      path: file.path
    };
  }
}