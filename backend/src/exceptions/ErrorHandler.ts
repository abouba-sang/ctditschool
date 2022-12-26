import { Response } from 'express';
import { AppError } from './AppError';

class ErrorHandler {
    private handleTrustedError(error: AppError, response: Response): void {
        response.status(error.httpCode).json({ message: error.message });
    }

    public handleError(error: Error | AppError, response: Response): void {
        if(response) {
            this.handleTrustedError(error as AppError, response);
        }
    }
}

export const errorHandler = new ErrorHandler();