import { Request, Response } from "express";

export const generatePdf = async (req: Request, res: Response) => {
    res.json({
        msg: "Hi"
    });
};

export const sendEmail = async (req: Request, res: Response) => {
    res.json({
        msg: "Hi"
    });
};
