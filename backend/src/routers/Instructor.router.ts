import express, { Router } from "express";
import { instructorController } from "../controllers/Instructor.controller";

const instructorRouter: Router = express.Router();

instructorRouter.get('/', instructorController.all);
instructorRouter.post('/', instructorController.createInstructor);
instructorRouter.get('/:id', instructorController.findInstructor);

export default instructorRouter;
