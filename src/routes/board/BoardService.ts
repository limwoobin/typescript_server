import Board from '../../models/board';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { BoardModel } from '../../core/model/BoardModel';

export default class BoardService {

    async getBoardList(boardType: CategoryTypeCode) {
        return Board.find({boardType: boardType});
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

    async updateBoard(board: any) {
        Board.findOneAndUpdate({boardId:board.id , userEmail:board.userEmail}, (
        {
            title:board.title , 
            content:board.content,
            image:board.image,
            modiDate:board.modiDate
        }) , {new:true});
    };

    async deleteBoard(board: any) {
        Board.deleteOne({boardId:board.id , userEmail:board.userEmail});
    };

    async getRecentNotice() {
        return await Board.find()
                           .where('boardType').equals('notice')
                           .sort('-regDate')
                           .limit(3)
                           .select('_id title');
    }
}