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
        return "get all courses are here";
    }
    getCourseById(id) {
        return `get course id ${id} from service`;
    }
    createCourse() {
        return "create course from service";
    }
    updateCourseById(id) {
        return `update course id ${id} from service`;
    }
    patchCourseById(id) {
        return `patch course id ${id} from service`;
    }
    deleteCourseById(id) {
        return `delete course id ${id} from service`;
    }
};
exports.CourseService = CourseService;
exports.CourseService = CourseService = __decorate([
    (0, common_1.Injectable)()
], CourseService);
//# sourceMappingURL=course.service.js.map