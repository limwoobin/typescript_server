const Board = require('../../models/board');

export default class BoardService {

    async getBoardList(boardType: string) {
        return Board.find({boardType: boardType});
    };

    async getBoard(_id: string) {
        const boardData = await Board.findOne({_id: _id});
        if (boardData) {
            boardData.views++;
            boardData.save();
        }
        return boardData;
    };

    async writeBoard(board: any) {
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