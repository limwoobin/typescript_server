"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailer_smtp_transport_1 = __importDefault(require("nodemailer-smtp-transport"));
const crypto_1 = __importDefault(require("crypto"));
const winston_1 = __importDefault(require("../../core/config/winston"));
const user_1 = __importDefault(require("../../models/user"));
const util_1 = __importDefault(require("../../core/util/util"));
const config = require('../../core/config/config.json');
const util = new util_1.default();
const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
    service: config.mailInfo.service,
    host: config.mailInfo.host,
    auth: {
        user: config.mailInfo.mail,
        pass: config.mailInfo.password,
    }
}));
class MailService {
    passwordFindMail(toEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            winston_1.default.info('sendMail:' + toEmail);
            let randomPwd = yield util.getRandomString();
            let mailOptions = {
                from: config.mailInfo.mail,
                to: toEmail,
                subject: 'Drogbalog에서 임시패스워드를 보내드립니다.',
                text: `임시 패스워드: ${randomPwd}`,
            };
            transporter.sendMail(mailOptions, (err, info) => __awaiter(this, void 0, void 0, function* () {
                const userModel = yield user_1.default.findOne({ userEmail: toEmail });
                return crypto_1.default.pbkdf2(randomPwd, userModel.salt, 102391, 64, 'sha512', (err, key) => {
                    let newPassword = key.toString('base64');
                    user_1.default.findOneAndUpdate({ userEmail: toEmail }, { $set: { "userPwd": newPassword } });
                });
            }));
        });
    }
}
exports.default = MailService;
//# sourceMappingURL=MailService.js.map