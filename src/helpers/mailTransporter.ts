import { mailTransporter } from "../config/secrets";
import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: `${mailTransporter.MAIL}`,
        pass: `${mailTransporter.PASS}`
    }
});

export const sendMail = (mailOptions: {}) => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Emails successfully sent!");
        }
    });
};