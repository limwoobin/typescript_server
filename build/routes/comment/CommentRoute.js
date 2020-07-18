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
const CommentService_1 = __importDefault(require("./CommentService"));
const ResponseType_1 = require("../../core/response/ResponseType");
const util_1 = __importDefault(require("../../core/util/util"));
const util = new util_1.default();
const commentService = new CommentService_1.default();
router.get('/comments/:userEmail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    try {
        const myComments = yield commentService.getMyComments(req.params.userEmail);
        result.data = myComments;
    }
    catch (err) {
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.post('/write', util.checkBoardId, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    try {
        const writeComment = yield commentService.writeComment(req.body);
    }
    catch (err) {
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.post('/update', util.checkBoardId, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    try {
        const updateComment = yield commentService.updateComment(req.body);
        result.data = updateComment;
    }
    catch (err) {
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
exports.default = router;
//# sourceMappingURL=CommentRoute.js.map