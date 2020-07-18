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
const post_1 = __importDefault(require("../../models/post"));
class PostService {
    getPosts(postType) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post_1.default.find({ postType: postType });
        });
    }
    getPost(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const postData = yield post_1.default.findOne({ _id: _id });
            postData.views++;
            postData.save();
            return postData;
        });
    }
    getRecentPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post_1.default.find()
                .sort('-createdAt')
                .limit(5)
                .select('_id title');
        });
    }
    writePost(postData) {
        return __awaiter(this, void 0, void 0, function* () {
            let post = new post_1.default();
            post.userEmail = postData.userEmail;
            post.postType = postData.postType;
            post.title = postData.title;
            post.content = postData.content;
            return yield post.save();
        });
    }
}
exports.default = PostService;
//# sourceMappingURL=PostService.js.map