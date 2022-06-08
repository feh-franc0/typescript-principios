import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "Nodejs",
        educator: "Franco",
        duration: 20,
    })

    CreateCourseService.execute({
        name: "React",
        educator: "Davi"
    })

    return response.send();
}