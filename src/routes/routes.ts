const routes = require("express").Router();
import { Request, Response } from "express";
import app from "../app";

import apiRoutes from "./api";


routes.get("/", (req: Request, res: Response) => {
    res.json({
        success: true,
        mode: app.get("env")
    });
});
routes.use("/api", apiRoutes);


export default routes;