import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import crypto from 'crypto';
import logger from '../../core/config/winston';
const config = require('../../config/config.json');
const Member = require('../../models/member');
const configFunc = require('../../config/config');


const transporter: any = nodemailer.createTransport(smtpTransport({
    service: config.mailInfo.service,
    host: config.mailInfo.host,
    auth: {
        user: config.mailInfo.mail,
        pass: config.mailInfo.password,
    }
}));

export default class MailService {
    
}