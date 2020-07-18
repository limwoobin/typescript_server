"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_auto_increment_1 = __importDefault(require("mongoose-auto-increment"));
const connection = mongoose_1.default.createConnection('mongodb://127.0.0.1:27017/drogbalog');
mongoose_auto_increment_1.default.initialize(connection);
const Board = new mongoose_1.default.Schema({
    boardId: { type: Number },
    userEmail: { type: String, required: true },
    boardType: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String },
    comments: { type: [] },
    views: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
Board.plugin(mongoose_auto_increment_1.default.plugin, {
    model: 'board',
    field: 'boardId',
    startAt: 1,
    increment: 1
});
exports.default = mongoose_1.default.model('Board', Board);
//# sourceMappingURL=board.js.map