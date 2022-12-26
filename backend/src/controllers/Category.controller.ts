import { Request, Response } from "express";
import { AppError } from "../exceptions/AppError";
import { HttpCode } from "../configs/Types";
import { CategoryModel } from "../models/Category.model";


export const categoryController = {
    all: async (req: Request, res: Response) => {
        const categories = await CategoryModel.find();
        if(!categories) {
            throw new AppError({
                httpCode: HttpCode.INTERNAL_SERVER_ERROR,
                description: "Some problems with the server occurred!"
            });
        }

        res.status(HttpCode.OK).json(categories);
    },
    createCategory: async (req: Request, res: Response) => {
        const data = req.body;
        const newCategory = new CategoryModel(data);

        newCategory.save((err) => {
            if(err) {
                throw new AppError({
                    httpCode: HttpCode.BAD_REQUEST,
                    description: "Category could not be saved!"
                })
            }else {
                res.status(HttpCode.OK).json(newCategory);
            }
        });
    },
    findCategory: async (req: Request, res: Response) => {
        const categoryId = req.params.id;
        const category = await CategoryModel.findOne({ _id: categoryId});

        if(!category) {
            throw new AppError({
                httpCode: HttpCode.NOT_FOUND,
                description: "Category doesn't exist!"
            });
        }else {
            res.status(200).json(category);
        }
    }
}
