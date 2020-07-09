import * as express from 'express';
const router = express.Router();
import BoardService from './BoardService';
import Board from '../../models/board';
import util from '../../util/util';
import Response from '../../core/code/ResponseType';
import { BoardModel } from '../../core/model/BoardModel';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import HttpStatus from 'http-status';
const logger = require('../../config/winston');

router.get('/list/:type' , async (req: express.Request , res: express.Response) => {
    const result = new Response<BoardModel[]>();
    const boardType: CategoryTypeCode = req.params.type as any;
    const boardService = new BoardService();

    try {
        const boards: BoardModel[] = await boardService.getBoardList(boardType);
        result.data = boards;
    } catch (err) {
        logger.info(err.message);
        result.code = HttpStatus.INTERNAL_SERVER_ERROR;
        result.message = HttpStatus["500"];
        result.error = err.message;
        return res.json(result);
    }

    return res.json(result);
})

export default router;