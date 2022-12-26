import { Date, Schema, Types } from "mongoose";

export interface DB_CONFIG {
    DB_URL?: string | undefined,
    DB_PORT?: string | undefined,
    DB_NAME?: string | undefined,
    DB_USER?: string | undefined,
    DB_PASS?: string | undefined,
};

export interface ENV {
    NODE_ENV: string | undefined;
    PORT: string | undefined;
};


interface IDate {
    createdAd?: Date,
    updatedAt?: Date
};


export interface IStudent extends IDate {
    id?: number | string,
    name: string | null,
    date_of_birth: string,
    username: string,
    password: string,
    email: string,
    phone?: string,
    registration_time: Date,
    last_login_time: Date
};

export interface IInstructor extends IDate {
    id?: number | string,
    name: string | null,
    date_of_birth: string,
    username: string,
    password: string,
    email: string,
    phone?: string,
    registration_time: Date,
    last_login_time: Date
};

export interface ICategory extends IDate {
    id?: number | string,
    name: string,
    description: string
};

export interface ILesson extends IDate {
    id?: number | string,
    title: string,
    description: string,
    image: Buffer,
    about: string,
    goals: string,
    program: string,
    instructor_id: Types.ObjectId,
    category_id: Types.ObjectId
};

export interface ICourseEnrolled extends IDate {
    id?: number | string,
    student_id: [Types.ObjectId],
    lesson_id: Types.ObjectId,
    instructor_id: Types.ObjectId,
    date_enrolment: Date,
    date_completion: Date
};

export enum HttpCode {
    OK = 200,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export interface AppErrorArgs {
    name?: string;
    httpCode: HttpCode;
    description: string;
}
