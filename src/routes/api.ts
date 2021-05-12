import * as miscController from "../controllers/misc";
import { asyncMiddleware } from "../middlewares/async";
const routes = require("express").Router();

routes.post("/generate/pdf", asyncMiddleware(miscController.generatePdf));
routes.post("/send/email", asyncMiddleware(miscController.sendEmail));

export default routes;
