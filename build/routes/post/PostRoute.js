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
const express = __importStar(require("express"));
const router = express.Router();
const PostService_1 = __importDefault(require("./PostService"));
const ResponseType_1 = require("../../core/response/ResponseType");
const winston_1 = __importDefault(require("../../core/config/winston"));
const util_1 = __importDefault(require("../../core/util/util"));
const util = new util_1.default();
const postService = new PostService_1.default();
router.get('/list/:postType', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    const postType = req.params.postType;
    winston_1.default.info('postType:' + postType);
    try {
        const posts = yield postService.getPosts(postType);
        result.data = posts;
        winston_1.default.info('posts:' + posts);
    }
    catch (err) {
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.get('/view/:_id', util.checkPostId, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    const _id = req.params._id;
    try {
        const post = yield postService.getPost(_id);
        result.data = post;
        winston_1.default.info('post:' + post);
    }
    catch (err) {
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.get('/recent/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    try {
        const recentPost = yield postService.getRecentPosts();
        result.data = recentPost;
        winston_1.default.info('recentPost:' + recentPost);
    }
    catch (err) {
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.post('/write', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    try {
        const writePost = yield postService.writePost(req.body);
    }
    catch (err) {
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
exports.default = router;
//# sourceMappingURL=PostRoute.js.map