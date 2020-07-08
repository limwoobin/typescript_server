import { reject } from "lodash";
import { resolve } from "path";

const Board = require('../../models/board');

export default class BoardService {

    async getBoardList(boardType: string) {
        if (boardType) {
            Board.find({boardType: boardType} , (err: any , categories: any) => {
                if (err) reject(err);
                resolve(categories);
            });
        } 
    };

    async getBoard(_id: string) {
        Board.findOne({_id: _id} , (err: any , boardData: any) => {
            if (err) reject(err);
            boardData.views++;
            boardData.save();
            resolve(boardData);
        })
    };

    writeBoard(board: any) {
        return new Promise((resolve , reject) => {
            board.save((err: any) => {
                if(err) reject(err);
                resolve('success');
            })
        })
    };

    updateBoard(board: any) {
        return new Promise(function(resolve , reject){
            Board.findOneAndUpdate({boardId:board.id , userEmail:board.userEmail}, (
                {
                    title:board.title , 
                    content:board.content,
                    image:board.image,
                    modiDate:board.modiDate
                }) , {new:true} , (err: any , data: any) => {
                if(err){
                    reject(err);
                }
                resolve(data);
            });
        });
    };

    async deleteBoard(board: any) {
        const deleteBoard: void = Board.deleteOne({boardId:board.id , userEmail:board.userEmail});
        console.log('deleteBoard' , deleteBoard);
        // return new Promise(function(resolve , reject){
        //     Board.deleteOne({boardId:board.id , userEmail:board.userEmail} , {new: true} , (err , data) => {
        //         if(err){
        //             reject(err.message);
        //         }
        //         resolve(data);
        //     })
        // });
    };

    getRecentNotice() {
        return new Promise((resolve , reject) => {
            Board.find()
              .where('boardType').equals('notice')
              .sort('-regDate')
              .limit(3)
              .select('_id title')
              .then((data: any) => {
                  resolve(data);
              }).catch((err: any) => {
                  reject(err);
              })
        })   
    }
}