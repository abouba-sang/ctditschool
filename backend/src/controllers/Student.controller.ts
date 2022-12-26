import { Request, Response } from "express";
import { AppError } from "../exceptions/AppError";
import { HttpCode } from "../configs/Types";
import { StudentModel } from "../models/Student.model";


export const studentController = {
    all: async (req: Request, res: Response) => {
        const students = await StudentModel.find();
        if(!students) {
            throw new AppError({
                httpCode: HttpCode.INTERNAL_SERVER_ERROR,
                description: "Some problems with the server occurred!"
            });
        }

        res.status(HttpCode.OK).json(students);
    },
    createStudent: async (req: Request, res: Response) => {
        const data = req.body;
        const newStudent = new StudentModel(data);

        newStudent.save((err) => {
            if(err) {
                throw new AppError({
                    httpCode: HttpCode.BAD_REQUEST,
                    description: "User could not be saved!"
                })
            }else {
                res.status(HttpCode.OK).json(newStudent);
            }
        });
    },
    findStudent: async (req: Request, res: Response) => {
        const studentId = req.params.id;
        const student = await StudentModel.findOne({ _id: studentId});

        if(!student) {
            throw new AppError({
                httpCode: HttpCode.NOT_FOUND,
                description: "Student doesn't exist!"
            });
        }else {
            res.status(200).json(student);
        }
    }
}
