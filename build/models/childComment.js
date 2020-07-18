"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_auto_increment_1 = __importDefault(require("mongoose-auto-increment"));
const connection = mongoose_1.default.createConnection('mongodb://127.0.0.1:27017/drogbalog');
mongoose_auto_increment_1.default.initialize(connection);
const ChildComment = new mongoose_1.default.Schema({
    childCommentId: { tpye: Number },
    board: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'board', required: true },
    post: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'post', required: true },
    commentId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'comment', required: true },
    userEmail: { type: String },
    content: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
ChildComment.plugin(mongoose_auto_increment_1.default.plugin, {
    model: 'childComment',
    field: 'childCommentId',
    startAt: 1,
    increment: 1
});
exports.default = mongoose_1.default.model('ChildComment', ChildComment);
//# sourceMappingURL=childComment.js.map