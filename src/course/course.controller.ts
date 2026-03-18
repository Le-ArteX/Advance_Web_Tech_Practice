import { Controller,Get,Post,Param,Body,Patch,Put,Delete,UploadedFile,UseInterceptors, BadRequestException, ParseIntPipe, Query,DefaultValuePipe } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService){}
 @Get()
 getAllCourses(){
    return this.courseService.getAllCourses();
 }

 @Get(':id')
 getCourseById(@Param('id')id:string){
    return this.courseService.getCourseById(id);
 }

@Get(':id/:postId')
getCoursePostById(
  @Param('id', ParseIntPipe) id: number,
  @Param('postId', ParseIntPipe) postId: number,
  @Query('name', new DefaultValuePipe('Herry')) name?: string,
): string {
  if (name !== undefined) {
    return `course with id ${id} and post with id ${postId} fetched successfully with name ${name}`;
  } else {
    return `course with id ${id} and post with id ${postId} fetched successfully`;
    }
}



 @Post()
 createCourse(@Body() CreateCourseDto: CreateCourseDto)
 {
    return this.courseService.createCourse(CreateCourseDto);
 }

 @Put(':id')
 updateCourse(@Body('id') id : string, @Body() UpdateCourseDto: UpdateCourseDto){
    return this.courseService.updateCourse(id,UpdateCourseDto);
 }

 @Patch(':id')
 patchCourse(@Body('id')id:string ,@Body() UpdateCourseDto: UpdateCourseDto){
    return this.courseService.patchCourse(id,UpdateCourseDto);
 }

 @Delete(':id')
 deleteCourse(@Param('id')id:string){
    return this.courseService.deleteCourse(id);
 }

 @Post()
@UseInterceptors(FileInterceptor('file', {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  }),
  fileFilter: (req, file, cb) => {
    if (file.originalname.match(/^.*\.(jpg|jpeg|pdf)$/)) {
      cb(null, true);
    } else {
      cb(new BadRequestException('only image files and pdf are accepted'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 },

}))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return { message: 'File uploaded successfully', filename: file.originalname, path: `uploads/${file.filename}` };
}

    createCourseMaterial(@Param('id') id: string,
     @Body() createCourseDto: CreateCourseDto,
     @UploadedFile() file: Express.Multer.File) {
      this.courseService.uploadCourseMaterial(id, file);

      return {
         message: `create course with name ${createCourseDto.name} ,code ${createCourseDto.code} 
         ,instructor ${createCourseDto.instructor} ,credit ${createCourseDto.credit} and 
         description ${createCourseDto.description} with course material uploaded successfully`,     
      };
   }

}
