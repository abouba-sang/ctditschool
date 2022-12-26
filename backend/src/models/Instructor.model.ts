import { Model, model, Schema } from "mongoose";
import { IInstructor } from "../configs/Types";

const instructorSchema: Schema = new Schema<IInstructor>({
    name: { type: String, required: true},
    username: { type: String, required: true},
    password: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: String, required: true},
    date_of_birth: Date,
    last_login_time: Date,
    registration_time: { type: Date, default: Date.now()},
},
{
    timestamps: true
});

export const InstructorModel: Model<IInstructor> = model<IInstructor>('Instructor', instructorSchema);
