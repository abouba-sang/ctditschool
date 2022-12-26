import express, { Router } from "express";
import { studentController } from "../controllers/Student.controller";

const studentRouter: Router = express.Router();

studentRouter.get('/', studentController.all);
studentRouter.post('/', studentController.createStudent);
studentRouter.get('/:id', studentController.findStudent);

export default studentRouter;
