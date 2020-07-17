import * as express from 'express';
import { Request } from 'express-serve-static-core';
import { Response , ResponseException} from '../response/ResponseType';
import Board from '../../models/board';
import crypto from 'crypto';
const Post = require('../../models/post');

const result = new Response<'success'>();

export default class Util {

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
        const _id: string = req.params.id || req.body._id;
        Post.findOne({_id: _id} , (err: Error) => {
            if (err) {
                return res.json(new ResponseException(err.message)); 
            }
            next();
        });
    }

    isLogged(req: express.Request , res: express.Response , next: express.NextFunction) {
        if(!req.user){
            return res.json(new ResponseException('empty data')); 
        }
        next();
    }

    sessionCheck(req: SessionRequest | any , res: express.Response , next: express.NextFunction) {
        if(req.session.userEmail || req.session.key) {
            return res.json(new ResponseException('empty data')); 
        }
        next();
    }

    async getRandomString() {
        const buf = await crypto.randomBytes(15);
        return buf.toString('base64');
    }
}

type SessionRequest = Request & {
    session: Express.Request;
    sessionId: string;   
}