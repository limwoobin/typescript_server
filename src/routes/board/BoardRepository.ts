import Board from '../../models/board';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import {Document , Model} from 'mongoose';
import BoardTypes from '../../models/types/BoardTypes';
import { BoardModel } from '../../core/model/BoardModel';

export default class BoardRepository {

    constructor(private boardModel: Model<BoardTypes & Document>) {
        this.boardModel = Board;
    }

    public async getBoardList(boardType: CategoryTypeCode) : Promise<BoardModel[]> {
        return this.boardModel.find({boardType: boardType});
    };

    public async getBoard(_id: string) : Promise<BoardModel> {
        const boardData: BoardModel | any = await this.boardModel.findOne({_id: _id});
        if (boardData) {
            boardData.views++;
            boardData.save();
        }
        return boardData;
    }
    
    public async boardSave(boardData: BoardModel) : Promise<BoardModel> {
        let board = new Board();
        board.boardType = boardData.boardType;
        board.userEmail = boardData.userEmail;
        board.title = boardData.title;
        board.content = boardData.content;
        return await board.save();
    }

    public async updateBoard(boardData: BoardModel) : Promise<void> {
        let board: BoardModel = new Board();
        board = boardData;

        await Board.findOneAndUpdate({boardId:board.boardId , userEmail:board.userEmail}, (
        {
            title:board.title , 
            content:board.content,
            updatedAt:board.updatedAt
        }) , {new:true});
    }

    public async deleteBoard(boardData: BoardModel) : Promise<void> {
        let board: BoardModel = new Board();
        board = boardData;
        await Board.deleteOne({boardId:board.boardId , userEmail:board.userEmail});
    }

    public async getRecentBoard() : Promise<BoardModel[]> {
        return await Board.find()
                           .where('boardType').equals('notice')
                           .sort('-createdAt')
                           .limit(3)
                           .select('_id title');
    }
}
