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
const comment_1 = __importDefault(require("../../models/comment"));
const childComment_1 = __importDefault(require("../../models/childComment"));
class CommentService {
    getMyComments(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            return comment_1.default.find({ userEmail: userEmail });
        });
    }
    writeComment(commentData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (commentData.commentId) {
                let childComment = new childComment_1.default();
                childComment.userEmail = commentData.userEmail;
                childComment.content = commentData.content;
                childComment.board = commentData._id;
                childComment.commentId = commentData.commentId;
                yield childComment.save();
            }
            else {
                let comment = new comment_1.default();
                comment.userEmail = commentData.userEmail;
                comment.content = commentData.content;
                comment.board = commentData._id;
                yield comment.save();
            }
        });
    }
    ;
    getComments(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const comments = yield comment_1.default.find({ board: id });
            function setChildComments(c) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let c in comments) {
                        yield setChildValue(comments[c]);
                    }
                });
            }
            ;
            function setChildValue(c) {
                return __awaiter(this, void 0, void 0, function* () {
                    const childComments = yield childComment_1.default.find({ commentId: c._id });
                    if (childComments.length !== 0) {
                        c.childComments = childComments;
                    }
                });
            }
            setChildComments(comments);
            return comments;
        });
    }
    updateComment(board) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateBoard = yield board_1.default.findOneAndUpdate({
                userEmail: board.userEmail,
                id: board._id,
                comment: board.content
            }, {
                comment: board.comment,
            }, { new: true });
            return updateBoard;
        });
    }
}
exports.default = CommentService;
//# sourceMappingURL=CommentService.js.map