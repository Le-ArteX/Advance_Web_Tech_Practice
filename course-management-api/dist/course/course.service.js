"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
let CourseService = class CourseService {
    getCourse() {
        return {
            message: "All courses fetched successfully",
            data: []
        };
    }
    getCourseById(id) {
        return {
            message: "Course fetched successfully",
            id: id
        };
    }
    createCourse(dto) {
        return {
            message: "Course created successfully",
            data: dto
        };
    }
    updateCourseById(id, dto) {
        return {
            message: "Course updated successfully",
            id: id,
            data: dto
        };
    }
    patchCourseById(id, dto) {
        return {
            message: "Course patched successfully",
            id: id,
            updatedFields: Object.keys(dto)
        };
    }
    deleteCourseById(id) {
        return {
            message: "Course deleted successfully",
            id: id
        };
    }
    uploadCourseMaterial(id, file) {
        return {
            message: "Material uploaded successfully",
            courseId: id,
            filename: file.filename,
            path: file.path
        };
    }
};
exports.CourseService = CourseService;
exports.CourseService = CourseService = __decorate([
    (0, common_1.Injectable)()
], CourseService);
//# sourceMappingURL=course.service.js.map