import { Request, Response } from "express";
import { AppError } from "../exceptions/AppError";
import { HttpCode } from "../configs/Types";
import { LessonModel } from "../models/Lesson.model";


export const lessonController = {
    all: async (req: Request, res: Response) => {
        const lessons = await LessonModel.find();
        if(!lessons) {
            throw new AppError({
                httpCode: HttpCode.INTERNAL_SERVER_ERROR,
                description: "Some problems with the server occurred!"
            });
        }

        res.status(HttpCode.OK).json(lessons);
    },
    createLesson: async (req: Request, res: Response) => {
        const data = req.body;
        const newLesson = new LessonModel(data);

        newLesson.save((err) => {
            if(err) {
                throw new AppError({
                    httpCode: HttpCode.BAD_REQUEST,
                    description: "Lesson could not be saved!"
                })
            }else {
                res.status(HttpCode.OK).json(newLesson);
            }
        });
    },
    findLesson: async (req: Request, res: Response) => {
        const lessonId = req.params.id;
        const lesson = await LessonModel.findOne({ _id: lessonId});

        if(!lesson) {
            throw new AppError({
                httpCode: HttpCode.NOT_FOUND,
                description: "Lesson doesn't exist!"
            });
        }else {
            res.status(200).json(lesson);
        }
    }
}
