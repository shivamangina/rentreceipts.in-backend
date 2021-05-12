const routes = require("express").Router();
import { Request, Response } from "express";
import app from "../app";

import apiRoutes from "./api";

routes.use("/api", apiRoutes);
routes.use("/", (req: Request, res: Response) => {
    res.json({
        success: true,
        mode: app.get("env")
    });
});

export default routes;