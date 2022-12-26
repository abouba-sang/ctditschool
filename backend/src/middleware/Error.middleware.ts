import { Request, Response, NextFunction } from "express";
import { errorHandler } from "../exceptions/ErrorHandler";

export const handleErrorFunction = (err: Error, req: Request, res: Response, next: NextFunction) => {
    errorHandler.handleError(err, res);
}
