import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import lusca from "lusca";
import flash from "express-flash";
import path from "path";
import clientRoutes from "./routes/routes";
import { error } from "./middlewares/error";
import cors from "cors";
require("dotenv").config();

const app = express();

app.set("port", process.env.PORT || 2021);
app.set("views", path.join(__dirname, "../views"));
app.set("env", process.env.NODE_ENV || "DEVELOPMENT");
app.set("view engine", "pug");

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);
app.use(cors());

app.use(clientRoutes);
app.use(error);
export default app;