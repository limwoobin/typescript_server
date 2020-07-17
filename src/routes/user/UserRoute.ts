import * as express from 'express';
const router = express.Router();
import User from '../../models/user';
import UserService from './UserService';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import logger from '../../core/config/winston';
import Util from '../../core/util/util';
import { UserModel } from '../../core/model/UserModel';
import crypto from 'crypto';
import { Response , ResponseException } from '../../core/response/ResponseType';
import { Request } from 'express-serve-static-core';

const userService = new UserService();
const util = new Util();

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


router.post('/login' , async (req: SessionRequest | any , res: express.Response , next: express.NextFunction) => {
    const result = new Response<string>();
    passport.authenticate('local' , (err: Error , user: UserModel , info: any) => {
        if (err) {
            return res.json(new ResponseException(err.message));
        }
        if (!user) {
            return res.json(new ResponseException('empty data'));
        }

        req.login(user , (err: Error) => {
            if (err) {
                return next(new ResponseException(err.message));
            }
            req.session.key = req.sessionID;
            result.data = user.userEmail;
            return res.json(result);
        });
    })(req , res , next);
});

router.get('/users' , async (req: express.Request , res: express.Response) => {
    const result = new Response<UserModel[] | any>();

    try {
        const getUsers = await userService.getUsers();
        logger.info('getUsers:' + getUsers);
        result.data = getUsers;
    } catch (err) {
        return res.json(new ResponseException(err.message));
    }

    return res.json(result);
});

router.get('/overlap/check/:userEmail' , async (req: express.Request , res: express.Response) => {
    const result = new Response<UserModel | any>();
    logger.info('req.params:' + req.params.userEmail);
    try {
        const user = await userService.findUser(req.params.userEmail);
        logger.info('user:' + user);
        result.data = user;
    } catch (err) {
        return res.json(new ResponseException(err.message));
    }
    
    return res.json(result);
});

router.post('/insert' , async (req: express.Request , res: express.Response) => {
    const result = new Response<any>();
    logger.info('req.body:' + req.body);

    let userModel = new User(req.body);
    try {
        const insertUser = await userService.insertUser(userModel);
        result.data = insertUser;
    } catch (err) {
        return res.json(new ResponseException(err.message));
    }

    return res.json(result);
});

router.post('/logout' , async (req: express.Request , res: express.Response) => {
    req.logout();
    return res.json(new Response<any>());
});

router.get('/update/info' , util.sessionCheck , async (req: SessionRequest | any , res: express.Response) => {
    const result = new Response<any>();

    try {
        let userModel = new User(req.body);
        const updateUser = await userService.updateUser(userModel , req.session.userEmail);
        result.data = updateUser;
    } catch (err) {
        return res.json(new ResponseException(err.message));
    }
    return res.json(result);
})

type SessionRequest = Request & {
    session: Express.Request;
    sessionId: string;   
}

export default router;