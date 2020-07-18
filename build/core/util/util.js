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
const ResponseType_1 = require("../response/ResponseType");
const board_1 = __importDefault(require("../../models/board"));
const crypto_1 = __importDefault(require("crypto"));
const post_1 = __importDefault(require("../../models/post"));
const config = require('../config/config.json');
const result = new ResponseType_1.Response();
class Util {
    checkBoardId(req, res, next) {
        const _id = req.params.id || req.body._id;
        console.log('_id:' + _id);
        board_1.default.findOne({ _id: _id }, (err) => {
            if (err) {
                return res.json(new ResponseType_1.ResponseException(err.message));
            }
            next();
        });
    }
    checkPostId(req, res, next) {
        const _id = req.params.id || req.body._id;
        post_1.default.findOne({ _id: _id }, (err) => {
            if (err) {
                return res.json(new ResponseType_1.ResponseException(err.message));
            }
            next();
        });
    }
    isLogged(req, res, next) {
        if (!req.user) {
            return res.json(new ResponseType_1.ResponseException('empty data'));
        }
        next();
    }
    sessionCheck(req, res, next) {
        if (req.session.userEmail || req.session.key) {
            return res.json(new ResponseType_1.ResponseException('empty data'));
        }
        next();
    }
    getRandomString() {
        return __awaiter(this, void 0, void 0, function* () {
            const buf = yield crypto_1.default.randomBytes(15);
            return buf.toString('base64');
        });
    }
    dbConnect() {
        return `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbs}`;
    }
}
exports.default = Util;
//# sourceMappingURL=util.js.map