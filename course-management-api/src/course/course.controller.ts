import { Controller,Get,Post,Patch,Delete,Put,Param,Query } from '@nestjs/common';
import { CourseService} from './course.service';

@Controller('course')
export class CourseController {

    constructor(private readonly courseService: CourseService){}
    @Get()
    public getCourse(): string{
        return this.courseService.getCourse();
    }

    @Get(':id')
    public getCourseById(@Param('id') id: string): string {
        return this.courseService.getCourseById(parseInt(id));
    }

   

     @Get(':id/:postId')
    getCoursePosts(
    @Param('id') id: string,
    @Param('postId') postId: string,
    @Query('name') name?: string,): String {
    if (name != undefined) {
      return `course posts for course ${id} and post ${postId} with name ${name}`;
    } else {
      return `course posts for course ${id} and post ${postId}`;
    }
  }
   @Get(':id1/:id2')
    public getCourseByTwoIds(@Param('id1') id1: string, @Param('id2') id2: string): string {
        return `get course id1 ${id1} and id2 ${id2} from service`;
    }

    @Post()
    public createCourse(): string{
        return this.courseService.createCourse();
    }

    @Put(':id')
    
    public updateCourseById(@Param('id') id: string): string{
        return `update course id ${id} from service`
    }

    @Patch(':id')
    public patchCourseById(@Param('id') id: string): string{
        return `patch course id ${id} from service`
    }

    @Delete(':id')
    public deleteCourseById(@Param('id') id: string): string{
        return `delete course id ${id} from service`
    }

}
