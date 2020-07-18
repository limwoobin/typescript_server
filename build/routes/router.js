"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const router = express.Router();
const CategoryRoute_1 = __importDefault(require("./category/CategoryRoute"));
const BoardRoute_1 = __importDefault(require("./board/BoardRoute"));
const CommentRoute_1 = __importDefault(require("./comment/CommentRoute"));
const UserRoute_1 = __importDefault(require("./user/UserRoute"));
const PostRoute_1 = __importDefault(require("./post/PostRoute"));
const MailRoute_1 = __importDefault(require("./mail/MailRoute"));
router.use('/category', CategoryRoute_1.default);
router.use('/board', BoardRoute_1.default);
router.use('/user', UserRoute_1.default);
router.use('/comment', CommentRoute_1.default);
router.use('/post', PostRoute_1.default);
router.use('/mail', MailRoute_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map