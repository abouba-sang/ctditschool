import express, { Router } from "express";
import { courseEnrolledController } from "../controllers/CourseEnrolled.controller";

const courseEnrolledRouter: Router = express.Router();

courseEnrolledRouter.get('/', courseEnrolledController.all);
courseEnrolledRouter.post('/', courseEnrolledController.createCourseEnrolled);
courseEnrolledRouter.get('/:id', courseEnrolledController.findCourseEnrolled);

export default courseEnrolledRouter;
