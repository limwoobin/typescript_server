"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = __importDefault(require("../../models/board"));
class BoardService {
    getBoardList(boardType) {
        return __awaiter(this, void 0, void 0, function* () {
            return board_1.default.find({ boardType: boardType });
        });
    }
    ;
    getBoard(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const boardData = yield board_1.default.findOne({ _id: _id });
            if (boardData) {
                boardData.views++;
                boardData.save();
            }
            return boardData;
        });
    }
    ;
    writeBoard(boardData) {
        return __awaiter(this, void 0, void 0, function* () {
            let board = new board_1.default();
            board.boardType = boardData.boardType;
            board.userEmail = boardData.userEmail;
            board.title = boardData.title;
            board.content = boardData.content;
            return board.save();
        });
    }
    ;
    updateBoard(boardData) {
        return __awaiter(this, void 0, void 0, function* () {
            let board = new board_1.default();
            board = boardData;
            board_1.default.findOneAndUpdate({ boardId: board.boardId, userEmail: board.userEmail }, ({
                title: board.title,
                content: board.content,
                updatedAt: board.updatedAt
            }), { new: true });
        });
    }
    ;
    deleteBoard(boardData) {
        return __awaiter(this, void 0, void 0, function* () {
            let board = new board_1.default();
            board = boardData;
            board_1.default.deleteOne({ boardId: board.boardId, userEmail: board.userEmail });
        });
    }
    ;
    getRecentNotice() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield board_1.default.find()
                .where('boardType').equals('notice')
                .sort('-createdAt')
                .limit(3)
                .select('_id title');
        });
    }
}
exports.default = BoardService;
//# sourceMappingURL=BoardService.js.map