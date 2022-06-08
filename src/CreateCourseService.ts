
/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
    name: string;
    educator: string;
    duration?: number;
}

class CreateCourseService {

    // execute(data: Course) {
    //     console.log(data.name, data.duration, data.educator)
    // }

    execute({duration = 5, educator, name}: Course) {
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService();