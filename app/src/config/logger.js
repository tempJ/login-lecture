const {createLogger, transports, format} = require("winston"); //winston module에서 사용하는 것들만 가져옴
const {combine, timestamp, json, simple, colorize, printf, label} = format;//format 함수에서 사용하는 것들만 가져옴

const printFormat = printf(({timestamp, label, level, message}) =>{
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const printLogFormat = {
    file: combine(
        label({
            label: "Back-end",
        }),
        
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd",
        }), 
        printFormat
    ),
        // json()
        //가장 마지막에 있는 함수/format이 출력
    console: combine(
        colorize(),
        simple()
    )
};

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file,
    }),
    console: new transports.Console({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.console,
    }),
}

const logger = createLogger({
    transports: [opts.file],
}); //folder 없어도 자동생성

if(process.env.NODE_ENV !== "production"){
    logger.add(opts.console);
}
//production: 서비스중
// system log 출력 유무로 dev 버전인지 서비스중인 버전인지 확인하는 코드

logger.stream = {
    write: (message) => logger.info(message),
};

module.exports = logger;