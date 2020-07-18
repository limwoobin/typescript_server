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
const user_1 = __importDefault(require("../../models/user"));
const UserService_1 = __importDefault(require("./UserService"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const winston_1 = __importDefault(require("../../core/config/winston"));
const util_1 = __importDefault(require("../../core/util/util"));
const crypto_1 = __importDefault(require("crypto"));
const ResponseType_1 = require("../../core/response/ResponseType");
const userService = new UserService_1.default();
const util = new util_1.default();
passport_1.default.serializeUser((user, done) => {
    done(null, user.userEmail);
});
passport_1.default.deserializeUser((userEmail, done) => {
    done(null, userEmail);
});
passport_1.default.use('local', new passport_local_1.default.Strategy({
    usernameField: 'userEmail',
    passwordField: 'userPwd',
    session: true,
}, function (userEmail, userPwd, done) {
    user_1.default.findOne({ userEmail: userEmail }, (err, user) => {
        if (err)
            return done(err);
        if (!user)
            return done(null, false, { message: '존재하지 않는 아이디입니다.' });
        crypto_1.default.pbkdf2(userPwd, user.salt, 102391, 64, 'sha512', (err, key) => {
            if (key.toString('base64') === user.userPwd) {
                return done(null, user);
            }
            else {
                return done(null, false, { message: '비밀번호가 틀렸습니다.' });
            }
        });
    });
}));
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            return res.json(new ResponseType_1.ResponseException(err.message));
        }
        if (!user) {
            return res.json(new ResponseType_1.ResponseException('empty data'));
        }
        req.login(user, (err) => {
            if (err) {
                return next(new ResponseType_1.ResponseException(err.message));
            }
            req.session.key = req.sessionID;
            result.data = user.userEmail;
            return res.json(result);
        });
    })(req, res, next);
}));
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    try {
        const getUsers = yield userService.getUsers();
        winston_1.default.info('getUsers:' + getUsers);
        result.data = getUsers;
    }
    catch (err) {
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.get('/overlap/check/:userEmail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    winston_1.default.info('req.params:' + req.params.userEmail);
    try {
        const user = yield userService.findUser(req.params.userEmail);
        winston_1.default.info('user:' + user);
        result.data = user;
    }
    catch (err) {
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.post('/insert', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    winston_1.default.info('req.body:' + req.body);
    let userModel = new user_1.default(req.body);
    try {
        const insertUser = yield userService.insertUser(userModel);
        result.data = insertUser;
    }
    catch (err) {
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
router.post('/logout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.logout();
    return res.json(new ResponseType_1.Response());
}));
router.get('/update/info', util.sessionCheck, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new ResponseType_1.Response();
    try {
        let userModel = new user_1.default(req.body);
        const updateUser = yield userService.updateUser(userModel, req.session.userEmail);
        result.data = updateUser;
    }
    catch (err) {
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
exports.default = router;
//# sourceMappingURL=UserRoute.js.map