import express, { Express } from 'express';
import bodyParser from 'body-parser';
import 'express-async-errors';
import { getDBConfigs, configurations } from './configs/Configs';
import { DB_CONFIG, ENV } from './configs/Types';
import { connectToDatabase } from './configs/Database';
import { handleErrorFunction } from './middleware/Error.middleware';
import studentRouter from './routers/Student.router';
import lessonRouter from './routers/Lesson.router';
import instructorRouter from './routers/Instructor.router';
import courseEnrolledRouter from './routers/CourseEnrolled.router';
import categoryRouter from './routers/Category.router';

const app: Express = express();

/**
 * parse application/x-www-form-urlencoded
 * and application/json
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

/**
 * Connection to the database
 */
const database_configs: DB_CONFIG  = getDBConfigs();
connectToDatabase(database_configs);

/**
 * Using routers
 */
app.use('/students', studentRouter);
app.use('/lessons', lessonRouter);
app.use('/instructors', instructorRouter);
app.use('/courses-enrolled', courseEnrolledRouter);
app.use('/categories', categoryRouter);

/**
 * Using error handling middleware
 */
app.use(handleErrorFunction);

/**
 * Server listening to port
*/
const env_variables: ENV = configurations();
app.listen(env_variables.PORT, () => {
    console.log(`[server]: running on port: ${env_variables.PORT}`);
});
