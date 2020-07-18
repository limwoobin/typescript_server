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
const BoardService_1 = __importDefault(require("./BoardService"));
const util_1 = __importDefault(require("../../core/util/util"));
const ResponseType_1 = require("../../core/response/ResponseType");
const winston_1 = __importDefault(require("../../core/config/winston"));
const util = new util_1.default();
const boardService = new BoardService_1.default();
router.get('/list/:type', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    const boardType = req.params.type;
    try {
        const boards = yield boardService.getBoardList(boardType);
        result.data = boards;
    }
    catch (err) {
        winston_1.default.info(err.message);
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.get('/view/:id', util.checkBoardId, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    const _id = req.params.id;
    try {
        const board = yield boardService.getBoard(_id);
        result.data = board;
    }
    catch (err) {
        winston_1.default.info(err.message);
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.post('/write', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    try {
        const writeBoard = yield boardService.writeBoard(req.body);
        console.log('writeBoard:' + writeBoard);
    }
    catch (err) {
        winston_1.default.info(err.message);
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.post('/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    try {
        const updateBoard = yield boardService.updateBoard(req.body);
        console.log('updateBoard', updateBoard);
    }
    catch (err) {
        winston_1.default.info(err.message);
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.delete('/delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    try {
        const deleteBoard = yield boardService.deleteBoard(req.body);
    }
    catch (err) {
        winston_1.default.info(err.message);
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.get('/recent/notice', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    try {
        const recentNotice = yield boardService.getRecentNotice();
        result.data = recentNotice;
    }
    catch (err) {
        winston_1.default.info(err.message);
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
exports.default = router;
//# sourceMappingURL=BoardRoute.js.map