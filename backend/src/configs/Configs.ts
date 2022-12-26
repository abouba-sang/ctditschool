import dotenv from 'dotenv';
dotenv.config();
import {DB_CONFIG, ENV} from './Types';

export const getDBConfigs = () : DB_CONFIG => {
    return {
        DB_URL: process.env.DB_URL,
        DB_PORT: process.env.DB_PORT,
        DB_NAME: process.env.DB_NAME,
        DB_USER: process.env.DB_USER,
        DB_PASS: process.env.DB_PASS
    }
}

export const configurations = () : ENV => {
    return {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.SERVER_PORT
    }
}

