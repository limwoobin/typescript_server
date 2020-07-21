import Board from '../../models/board';
import { Service , Inject } from 'typedi';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { BoardModel } from '../../core/model/BoardModel';
import BoardRepository from './BoardRepository';
import logger from '../../core/config/winston';

@Service()
export default class BoardService {
    constructor(
        private boardRepository: BoardRepository,
        @Inject('logger') private logger: any
    ) {}

    async getBoardList(boardType: CategoryTypeCode) {
        logger.info('boardType:' + boardType);
        return this.boardRepository.getBoardList(boardType);
    };

    async getBoard(_id: string) {
        const boardData: BoardModel | any = await Board.findOne({_id: _id});
        if (boardData) {
            boardData.views++;
            boardData.save();
        }
        return boardData;
    };

    async writeBoard(boardData: any) {
        let board = new Board();
        board.boardType = boardData.boardType;
        board.userEmail = boardData.userEmail;
        board.title = boardData.title;
        board.content = boardData.content;

        return board.save();
    };

    async updateBoard(boardData: any) {
        let board: BoardModel = new Board();
        board = boardData;

        Board.findOneAndUpdate({boardId:board.boardId , userEmail:board.userEmail}, (
        {
            title:board.title , 
            content:board.content,
            updatedAt:board.updatedAt
        }) , {new:true});
    };

    async deleteBoard(boardData: any) {
        let board: BoardModel = new Board();
        board = boardData;
        Board.deleteOne({boardId:board.boardId , userEmail:board.userEmail});
    };

    async getRecentNotice() {
        return await Board.find()
                           .where('boardType').equals('notice')
                           .sort('-createdAt')
                           .limit(3)
                           .select('_id title');
    }
}