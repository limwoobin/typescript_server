import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
const config = require('../config/config.json');
import logger from '../config/winston';
const Member = require('../../models/member');
import crypto from 'crypto';
import Util from '../util/util';

const util = new Util();

const transporter = nodemailer.createTransport(smtpTransport({
    service: config.mailInfo.service,
    host: config.mailInfo.host,
    auth: {
        user: config.mailInfo.mail,
        pass: config.mailInfo.password,
    }
}));



class mailConfig {
    
    async passwordFindMail(toEmail: string) {
        let randomPwd: string | any = await util.getRandomString();
        let mailOptions = {
            from: config.mailInfo.mail,
            to: toEmail,
            subject: 'Drogbalog에서 임시패스워드를 보내드립니다.',
            text: `임시 패스워드: ${randomPwd}`,
        }
        
        transporter.sendMail(mailOptions , async (err , info) => {
            const memberModel = await Member.findOne({userEmail: toEmail});
            return crypto.pbkdf2(randomPwd , memberModel.salt , 102391 , 64 , 'sha512' , (err , key) => {
                    let newPassword = key.toString('base64');
                    Member.findOneAndUpdate({userEmail: toEmail}, {$set : {"userPwd": newPassword}});
            });
        })
    }
}

export default mailConfig;