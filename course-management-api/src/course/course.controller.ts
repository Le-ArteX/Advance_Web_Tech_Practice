import { Controller, Get, Post, Put, Patch, Delete, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) { }

    @Get()
    findAll() { return this.courseService.getCourse(); }

    @Get(':id')
    findOne(@Param('id') id: string) { return this.courseService.getCourseById(id); }

    @Post()
    create(@Body() dto: CreateCourseDto) { return this.courseService.createCourse(dto); }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
        return this.courseService.updateCourseById(id, dto);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
        return this.courseService.patchCourseById(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) { return this.courseService.deleteCourseById(id); }

    @Post(':id/upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
                return cb(new Error('Only .jpg, .jpeg, .png, and .pdf files are allowed!'), false);
            }
            cb(null, true);
        },
        limits: { fileSize: 2 * 1024 * 1024 }
    }))
    uploadFile(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
        return this.courseService.uploadCourseMaterial(id, file);
    }
}