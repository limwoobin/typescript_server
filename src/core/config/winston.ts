import winston from 'winston';
import 'winston-daily-rotate-file';
import 'date-utils';

const logger = winston.createLogger({
    level: 'debug', // 최소 레벨
    // 파일 저장
    transports: [
        new winston.transports.DailyRotateFile({
            filename : 'logs/system.log', // log 폴더에 system.log 이름으로 저장
            zippedArchive: true, // 압축여부
            format: winston.format.printf(
                info => `${new Date().toLocaleString()} [${info.level.toUpperCase()}] - ${info.message}`)
        }),
        // 콘솔 출력
        new winston.transports.Console({
            format: winston.format.printf(
                info => `${new Date().toLocaleString()} [${info.level.toUpperCase()}] - ${info.message}`)
        })
    ]
});

export default logger;