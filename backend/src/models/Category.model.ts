import { Model, model, Schema } from "mongoose";
import { ICategory } from "../configs/Types";

const categorySchema: Schema = new Schema<ICategory>({
    name: { type: String, required: true},
    description: { type: String, required: true}
},
{
    timestamps: true
});

export const CategoryModel: Model<ICategory> = model<ICategory>('Category', categorySchema);
