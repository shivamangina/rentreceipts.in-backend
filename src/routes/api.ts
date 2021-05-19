import * as miscController from "../controllers/misc";
import { asyncMiddleware } from "../middlewares/async";
const routes = require("express").Router();

routes.get("/generate/pdf", asyncMiddleware(miscController.generatePdf));
routes.post("/send/email", asyncMiddleware(miscController.sendEmail));

routes.get("/send/excel", asyncMiddleware(miscController.generateExcel));
routes.get("/download/excel", asyncMiddleware(miscController.generateExcelDownload));

export default routes;
