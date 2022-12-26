import { Request, Response } from "express";
import { AppError } from "../exceptions/AppError";
import { HttpCode } from "../configs/Types";
import { InstructorModel } from "../models/Instructor.model";


export const instructorController = {
    all: async (req: Request, res: Response) => {
        const instructors = await InstructorModel.find();
        if(!instructors) {
            throw new AppError({
                httpCode: HttpCode.INTERNAL_SERVER_ERROR,
                description: "Some problems with the server occurred!"
            });
        }

        res.status(HttpCode.OK).json(instructors);
    },
    createInstructor: async (req: Request, res: Response) => {
        const data = req.body;
        const newInstructor = new InstructorModel(data);

        newInstructor.save((err) => {
            if(err) {
                throw new AppError({
                    httpCode: HttpCode.BAD_REQUEST,
                    description: "Instructor could not be saved!"
                })
            }else {
                res.status(HttpCode.OK).json(newInstructor);
            }
        });
    },
    findInstructor: async (req: Request, res: Response) => {
        const instructorId = req.params.id;
        const instructor = await InstructorModel.findOne({ _id: instructorId});

        if(!instructor) {
            throw new AppError({
                httpCode: HttpCode.NOT_FOUND,
                description: "Instructor doesn't exist!"
            });
        }else {
            res.status(200).json(instructor);
        }
    }
}
