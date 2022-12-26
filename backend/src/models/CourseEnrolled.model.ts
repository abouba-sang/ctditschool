import { Model, model, Schema, Types } from "mongoose";
import { ICourseEnrolled } from "../configs/Types";

const courseEnrolledSchema: Schema = new Schema<ICourseEnrolled>({
    student_id: { type: [Types.ObjectId] },
    lesson_id: Types.ObjectId,
    instructor_id: Types.ObjectId,
    date_enrolment: Date,
    date_completion: Date
},
{
    timestamps: true
});

export const CourseEnrolledModel: Model<ICourseEnrolled> = model<ICourseEnrolled>('CourseEnrolled', courseEnrolledSchema);
