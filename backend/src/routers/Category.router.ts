import express, { Router } from "express";
import { categoryController } from "../controllers/Category.controller";

const categoryRouter: Router = express.Router();

categoryRouter.get('/', categoryController.all);
categoryRouter.post('/', categoryController.createCategory);
categoryRouter.get('/:id', categoryController.findCategory);

export default categoryRouter;
