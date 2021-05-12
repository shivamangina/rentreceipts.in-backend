import { check } from "express-validator";


export const LoginValidator = [
    check("email", "Please enter a valid Email").isEmail(),
    check("password", "Password is required").notEmpty()
];

export const SignupValidator = [
    check("fullName", "Please enter a valid Name ")
        .matches(/^[a-zA-Z ]*$/)
        .isLength({ min: 3 }),
    check("email", "Please enter a valid Email").isEmail(),
    check("mobile", "mobile is required").notEmpty()
];

export const requireMobile = [
    check("mobile", "mobile is required").notEmpty()
];