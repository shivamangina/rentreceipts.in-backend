import { validationResult } from "express-validator";

export const asyncMiddleware = (handler: (arg0: any, arg1: any) => any) => {
    return async (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { errors: any }): any; new(): any } } }, next: (arg0: any) => void) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(200).json({ errors: errors });
        }
        try {
            await handler(req, res);
        }
        catch (ex) {
            next(ex);
        }
    };
};