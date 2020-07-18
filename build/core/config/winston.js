"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
require("winston-daily-rotate-file");
require("date-utils");
const logger = winston_1.default.createLogger({
    level: 'debug',
    // 파일 저장
    transports: [
        new winston_1.default.transports.DailyRotateFile({
            filename: 'logs/system.log',
            zippedArchive: true,
            format: winston_1.default.format.printf(info => `${new Date().toLocaleString()} [${info.level.toUpperCase()}] - ${info.message}`)
        }),
        // 콘솔 출력
        new winston_1.default.transports.Console({
            format: winston_1.default.format.printf(info => `${new Date().toLocaleString()} [${info.level.toUpperCase()}] - ${info.message}`)
        })
    ]
});
exports.default = logger;
//# sourceMappingURL=winston.js.map