import * as express from 'express';
import { Request } from 'express-serve-static-core';
import { Response , ResponseException} from '../response/ResponseType';
import Board from '../../models/board';
import crypto from 'crypto';
const Post = require('../../models/post');

const result = new Response();

export default class util {

    checkBoardId(req: express.Request , res: express.Response , next: express.NextFunction) {
        const _id: string = req.params.id || req.body._id;
        console.log('_id:' + _id);
        Board.findOne({_id:_id} , (err:Error) => {
            if (err) {
                return res.json(new ResponseException(err.message)); 
            }
            next();
        });
    }

    checkPostId(req: express.Request , res: express.Response , next: express.NextFunction) {
        const result: any = new Response();
        const _id: string = req.params.id || req.body._id;
        Post.findOne({_id:_id} , (err:Error) => {
            if(err) {
                result.code = 'DR02';
                result.data = err.message;
                return res.json(result); 
            }
            next();
        });
    }

    isLogged(req: express.Request , res: express.Response , next: express.NextFunction) {
        const result: any = new Response();
        if(!req.user){
            result.code = 'DR03';
            return res.json(result); 
        }
        next();
    }

    sessionCheck(req: SessionRequest , res: express.Response , next: express.NextFunction) {
        const result: any = new Response();
        if(req.session.userEmail || req.session.key) {
            result.code = 'DR01';
            return res.json(result); 
        }
        next();
    }

    async getRandomString() {
        return new Promise(function(resolve , reject){
            crypto.randomBytes(15, async (err, buf) => {
                resolve(buf.toString('base64'));
            });
        });
    }
}

type SessionRequest = Request & {
    session: Express.Request;
    sessionId: string;   
}