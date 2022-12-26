import mongoose, { ConnectOptions } from "mongoose";
import { DB_CONFIG } from './Types';

export const connectToDatabase = (config: DB_CONFIG) => {
    const { DB_URL, DB_PORT, DB_NAME, DB_USER, DB_PASS } = config;

    const connectionOptions: ConnectOptions = {
        dbName: DB_NAME,
        user: DB_USER,
        pass: DB_PASS
    }

    mongoose.set('strictQuery', true);
    mongoose.connect(`${DB_URL}:${DB_PORT}`, connectionOptions)
    .then((conn) => {
        const { host, port, name } = conn.connections[0];
        console.log(`[server]: database connection established on: ${host}:${port}/${name}`);
    })
    .catch((error) => console.error('connection error: ', error));
}