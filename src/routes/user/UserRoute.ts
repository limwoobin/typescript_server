import express from 'express';
const router = express.Router();
import User from '../../models/user';
import UserService from './UserService';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import logger from '../../core/config/winston';
import Util from '../../core/util/util';
import { UserModel } from '../../core/model/UserModel';
import crypto from 'crypto';

passport.serializeUser((user: UserModel , done) => {
    done(null , user.userEmail);
});

passport.deserializeUser((userEmail , done) => {
    done(null , userEmail);
});

passport.use('local' , new LocalStrategy.Strategy({
    usernameField: 'userEmail',
    passwordField: 'userPwd',
    session: true,
}, function(userEmail: string , userPwd: string , done: any) {
    User.findOne({userEmail: userEmail} , (err: any , user: UserModel) => {
        if(err) return done(err);
        if(!user) return done(null , false , {message:'존재하지 않는 아이디입니다.'});
        crypto.pbkdf2(userPwd , user.salt, 102391, 64, 'sha512', (err, key) => {
            if(key.toString('base64') === user.userPwd){
                return done(null , user); 
            }else{
                return done(null , false , {message:'비밀번호가 틀렸습니다.'});
            }
        });
    });
}));