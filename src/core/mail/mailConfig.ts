import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
const config = require('../config/config.json');
import logger from '../config/winston';
// import Member from '../../models/member';
import crypto from 'crypto';
import util from '../util/util';


const transporter = nodemailer.createTransport(smtpTransport({
    service: config.mailInfo.service,
    host: config.mailInfo.host,
    auth: {
        user: config.mailInfo.mail,
        pass: config.mailInfo.password,
    }
}));


class mailConfig {

    passwordFindMail(toEmail: string) {

    }
}

export default mailConfig;