import winston from "winston";

export const error = (error: any, req: any, res: any, next: any) => {
    winston.error(error.message, error);

    // error
    // warn
    // info
    // verbose
    // debug 
    // silly

    // res.status(500).send("Internal Server Error.");
    res.status(200).json({
        success: false,
        message: error.message,
    });
};