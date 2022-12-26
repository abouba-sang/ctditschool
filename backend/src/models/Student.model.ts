import { Model, model, Schema } from "mongoose";
import { IStudent } from "../configs/Types";

const studentSchema: Schema = new Schema<IStudent>({
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

export const StudentModel: Model<IStudent> = model<IStudent>('Student', studentSchema);
