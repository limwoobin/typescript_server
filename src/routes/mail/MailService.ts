import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import crypto from 'crypto';
import logger from '../../core/config/winston';
import User from '../../models/user';
import Util from '../../core/util/util';
import { UserModel } from '../../core/model/UserModel';
const config = require('../../core/config/config.json');

const util = new Util();

const transporter: any = nodemailer.createTransport(smtpTransport({
    service: config.mailInfo.service,
    host: config.mailInfo.host,
    auth: {
        user: config.mailInfo.mail,
        pass: config.mailInfo.password,
    }
}));

export default class MailService {
    async passwordFindMail(toEmail: string) {
        logger.info('sendMail:' + toEmail);
        let randomPwd: string | any = await util.getRandomString();
        let mailOptions = {
            from: config.mailInfo.mail,
            to: toEmail,
            subject: 'Drogbalog에서 임시패스워드를 보내드립니다.',
            text: `임시 패스워드: ${randomPwd}`,
        }
        
        transporter.sendMail(mailOptions , async (err: Error , info: any) => {
            const userModel: UserModel | any = await User.findOne({userEmail: toEmail});
            return crypto.pbkdf2(randomPwd , userModel.salt , 102391 , 64 , 'sha512' , (err , key) => {
                    let newPassword = key.toString('base64');
                    User.findOneAndUpdate({userEmail: toEmail}, {$set : {"userPwd": newPassword}});
            });
        })
    }
}