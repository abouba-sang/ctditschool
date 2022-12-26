import { Request, Response } from "express";
import { AppError } from "../exceptions/AppError";
import { HttpCode } from "../configs/Types";
import { CourseEnrolledModel } from "../models/CourseEnrolled.model";


export const courseEnrolledController = {
    all: async (req: Request, res: Response) => {
        const coursesEnrolled = await CourseEnrolledModel.find();
        if(!coursesEnrolled) {
            throw new AppError({
                httpCode: HttpCode.INTERNAL_SERVER_ERROR,
                description: "Some problems with the server occurred!"
            });
        }

        res.status(HttpCode.OK).json(coursesEnrolled);
    },
    createCourseEnrolled: async (req: Request, res: Response) => {
        const data = req.body;
        const newCourseEnrolled = new CourseEnrolledModel(data);

        newCourseEnrolled.save((err) => {
            if(err) {
                throw new AppError({
                    httpCode: HttpCode.BAD_REQUEST,
                    description: "Course enrolled could not be saved!"
                })
            }else {
                res.status(HttpCode.OK).json(newCourseEnrolled);
            }
        });
    },
    findCourseEnrolled: async (req: Request, res: Response) => {
        const courseEnrolledId = req.params.id;
        const courseEnrolled = await CourseEnrolledModel.findOne({ _id: courseEnrolledId});

        if(!courseEnrolled) {
            throw new AppError({
                httpCode: HttpCode.NOT_FOUND,
                description: "Course enrolled doesn't exist!"
            });
        }else {
            res.status(200).json(courseEnrolled);
        }
    }
}
