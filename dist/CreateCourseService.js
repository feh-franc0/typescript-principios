"use strict";
/**
 * name - string
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    // execute(data: Course) {
    //     console.log(data.name, data.duration, data.educator)
    // }
    execute({ duration = 5, educator, name }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
