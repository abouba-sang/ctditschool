import { Model, model, Schema, Types } from "mongoose";
import { ILesson } from "../configs/Types";

const lessonSchema: Schema = new Schema<ILesson>({
    title: { type: String, required: true},
    image: Buffer,
    description: { type: String, required: true},
    about: { type: String, required: true},
    goals: { type: String, required: true},
    program: { type: String, required: true},
    instructor_id: Types.ObjectId,
    category_id: Types.ObjectId
},
{
    timestamps: true
});

export const LessonModel: Model<ILesson> = model<ILesson>('Lesson', lessonSchema);
