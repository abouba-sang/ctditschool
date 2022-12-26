import express, { Router } from "express";
import { lessonController } from "../controllers/Lesson.controller";

const lessonRouter: Router = express.Router();

lessonRouter.get('/', lessonController.all);
lessonRouter.post('/', lessonController.createLesson);
lessonRouter.get('/:id', lessonController.findLesson);

export default lessonRouter;
