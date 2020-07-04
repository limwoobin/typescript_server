// import * as express from 'express';
// import { Request } from 'express-serve-static-core';
// const common = require('../common/common');
// const Board = require('../models/board');
// const Post = require('../models/post');

// export default class util {

//     checkBoardId(req: express.Request , res: express.Response , next: express.NextFunction) {
//         const result: any = common.result;
//         const _id: string = req.params.id || req.body._id;
//         Board.findOne({_id:_id} , (err:Error) => {
//             if(err) {
//             result.code = 'DR02';
//             result.message = common.status.DR02;
//             result.data = err.message;
//             return res.json(result); 
//             }
//             next();
//         });
//     }

//     checkPostId(req: express.Request , res: express.Response , next: express.NextFunction) {
//         const result: any = common.result;
//         const _id: string = req.params.id || req.body._id;
//         Post.findOne({_id:_id} , (err:Error) => {
//             if(err) {
//                 result.code = 'DR02';
//                 result.message = common.status.DR02;
//                 result.data = err.message;
//                 return res.json(result); 
//             }
//             next();
//         });
//     }

//     isLogged(req: express.Request , res: express.Response , next: express.NextFunction) {
//         const result: any = common.result;
//         if(!req.user){
//             result.code = 'DR03';
//             result.message = common.status.DR03;
//             return res.json(result); 
//         }
//         next();
//     }

//     // sessionCheck(req: Request , res: express.Response , next: express.NextFunction) {
//     //     const result: any = common.result;
//     //     if(req.session.userEmail || req.session.key) {
//     //         result.code = 'DR01';
//     //         result.message = common.status.DR01;
//     //         return res.json(result); 
//     //     }
//     //     next();
//     // }
// }