"use strict";

const app = require("../app");
const logger = require("../src/config/logger");

const port = process.env.PORT || 2048;

app.listen(port, () =>{
    logger.info(`${port} PORT - server`);
});