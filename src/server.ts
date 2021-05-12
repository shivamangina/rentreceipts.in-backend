import errorHandler from "errorhandler";
import app from "./app";

app.use(errorHandler());

const server = require("http").Server(app);

server.listen(app.get("port"), () => {
    console.log("App is running at PORT %d in %s mode", app.get("port"), app.get("env"));
});