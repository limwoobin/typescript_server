import * as express from 'express';
const router = express.Router();
import CommentService from './CommentService';
import { Response , ResponseException } from '../../core/response/ResponseType';
import Board from '../../models/board';
import Util from '../../core/util/util';
import logger from '../../core/config/winston';
import { CommentModel } from '../../core/model/CommentModel';
import { BoardModel } from '../../core/model/BoardModel';
import { Optional } from '../../core/model/OptionalType';


const util = new Util();
const commentService = new CommentService();

router.get('/comments/:userEmail' , async (req: express.Request , res: express.Response) => {
    const result = new Response<CommentModel[]>();

    try {
        const myComments: CommentModel[] | any = await commentService.getMyComments(req.params.userEmail);
        result.data = myComments;
    } catch (err) {
        return res.json(new ResponseException(err.message));
    }
    
    return res.json(result);
});

router.post('/write' , util.checkBoardId , async (req: express.Request , res: express.Response) => {
    const result = new Response<''>();

    try {
        const writeComment: void = await commentService.writeComment(req.body);
    } catch (err) {
        return res.json(new ResponseException(err.message));
    }

    return res.json(result);
})

router.post('/update' , util.checkBoardId , async (req: express.Request , res: express.Response) => {
    const result = new Response<Optional<BoardModel>>();

    try {
        const updateComment = await commentService.updateComment(req.body);
        result.data = updateComment;
    } catch (err) {
        return res.json(new ResponseException(err.message));
    }

    return res.json(result);
})

export default router;