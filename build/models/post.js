"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_auto_increment_1 = __importDefault(require("mongoose-auto-increment"));
const PostTypeCode_1 = require("../core/code/PostTypeCode");
const connection = mongoose_1.default.createConnection('mongodb://127.0.0.1:27017/drogbalog');
mongoose_auto_increment_1.default.initialize(connection);
const Post = new mongoose_1.default.Schema({
    postId: { type: Number },
    userEmail: { type: String, required: true },
    postType: { type: PostTypeCode_1.PostTypeCode, required: true },
    title: { type: String, required: true },
    content: { type: String },
    comments: { type: [] },
    views: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
Post.plugin(mongoose_auto_increment_1.default.plugin, {
    model: 'post',
    field: 'postId',
    startAt: 1,
    increment: 1
});
exports.default = mongoose_1.default.model('Post', Post);
//# sourceMappingURL=post.js.map