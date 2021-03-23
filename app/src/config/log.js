const fs = require("fs");
const appRoot = require("app-root-path");

const accessLogStream = fs.createWriteStream(
    `${appRoot}/log/access.log`,
    {flags: "a"}
); //folder 없으면 에러남, log file은 자동 생성

module.exports = accessLogStream;