"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const common_1 = require("@nestjs/common");
const course_service_1 = require("./course.service");
let CourseController = class CourseController {
    courseService;
    constructor(courseService) {
        this.courseService = courseService;
    }
    getCourse() {
        return this.courseService.getCourse();
    }
    getCourseById(id) {
        return this.courseService.getCourseById(parseInt(id));
    }
    getCoursePosts(id, postId, name) {
        if (name != undefined) {
            return `course posts for course ${id} and post ${postId} with name ${name}`;
        }
        else {
            return `course posts for course ${id} and post ${postId}`;
        }
    }
    getCourseByTwoIds(id1, id2) {
        return `get course id1 ${id1} and id2 ${id2} from service`;
    }
    createCourse() {
        return this.courseService.createCourse();
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
exports.CourseController = CourseController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CourseController.prototype, "getCourse", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CourseController.prototype, "getCourseById", null);
__decorate([
    (0, common_1.Get)(':id/:postId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('postId')),
    __param(2, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", String)
], CourseController.prototype, "getCoursePosts", null);
__decorate([
    (0, common_1.Get)(':id1/:id2'),
    __param(0, (0, common_1.Param)('id1')),
    __param(1, (0, common_1.Param)('id2')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], CourseController.prototype, "getCourseByTwoIds", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CourseController.prototype, "createCourse", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CourseController.prototype, "updateCourseById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CourseController.prototype, "patchCourseById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CourseController.prototype, "deleteCourseById", null);
exports.CourseController = CourseController = __decorate([
    (0, common_1.Controller)('course'),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseController);
//# sourceMappingURL=course.controller.js.map