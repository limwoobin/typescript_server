import * as express from 'express';
const router = express.Router();
import BoardService from './BoardService';
import Util from '../../util/util';
import { Response } from '../../core/response/ResponseType';
import { BoardModel } from '../../core/model/BoardModel';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import HttpStatus from 'http-status';
const logger = require('../../config/winston');

const util = new Util();
const boardService = new BoardService();

// router.get('/list/:type' , async (req: express.Request , res: express.Response) => {
//     const result = new Response<BoardModel[]>();
//     const boardType: CategoryTypeCode = req.params.type as any;

//     try {
//         const boards: BoardModel[] = await boardService.getBoardList(boardType);
//         result.data = boards;
//     } catch (err) {
//         logger.info(err.message);
//         result.code = HttpStatus.INTERNAL_SERVER_ERROR;
//         result.message = HttpStatus["500"];
//         result.error = err.message;
//         return res.json(result);
//     }

//     return res.json(result);
// });

// router.get('/view/:id' , util.checkBoardId , async (req: express.Request , res: express.Response) => {
//     const result = new Response<BoardModel>();
//     const _id: string = req.params.id;

//     try {
//         const board: BoardModel = await boardService.getBoard(_id);
//         result.data = board;
//     } catch (err) {
//         logger.info(err.message);
//         result.code = HttpStatus.INTERNAL_SERVER_ERROR;
//         result.message = HttpStatus[500];
//         result.error = err.message;
//         return res.json(result);
//     }

//     return res.json(result);
// });

// router.post('/write' , async (req: express.Request , res: express.Response ) => {
//     const result = new Response<''>();
    
//     try {
//         const writeBoard: void | any = await boardService.writeBoard(req.body);
//         console.log('writeBoard:' + writeBoard);
//     } catch (err) {
//         logger.info(err.message);
//         result.code = HttpStatus.INTERNAL_SERVER_ERROR;
//         result.message = HttpStatus[500];
//         result.error = err.message;
//         return res.json(result);
//     }
//     return res.json(result);
// })

// router.post('/update' , async (req: express.Request , res: express.Response) => {
//     const result = new Response<''>();

//     try {
//         const updateBoard: void | any = await boardService.updateBoard(req.body);
//         console.log('updateBoard' , updateBoard);
//     } catch (err) {
//         logger.info(err.message);
//         result.code = HttpStatus.INTERNAL_SERVER_ERROR;
//         result.message = HttpStatus[500];
//         result.error = err.message;
//         return res.json(result);
//     }

//     return res.json(result);
// });

// router.delete('/delete' , async (req: express.Request , res: express.Response) => {
//     const result = new Response<''>();

//     try {
//         const deleteBoard: void = await boardService.deleteBoard(req.body);
//         console.log('deleteBoard' , deleteBoard);
//     } catch (err) {
//         logger.info(err.message);
//         result.code = HttpStatus.INTERNAL_SERVER_ERROR;
//         result.message = HttpStatus[500];
//         result.error = err.message;
//         return res.json(result);
//     }

//     return res.json(result);
// })

// router.get('/recent/notice' , async (req: express.Request , res: express.Response) => {
//     const result = new Response<BoardModel[]>();

//     try {
//         const recentNotice: BoardModel[] = await boardService.getRecentNotice();
//         result.data = recentNotice;
//     } catch (err) {
//         logger.info(err.message);
//         result.code = HttpStatus.INTERNAL_SERVER_ERROR;
//         result.message = HttpStatus[500];
//         result.error = err.message;
//         return res.json(result);
//     }
    
//     return res.json(result);
// })

export default router;