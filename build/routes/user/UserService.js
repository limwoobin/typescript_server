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
const user_1 = __importDefault(require("../../models/user"));
const crypto_1 = __importDefault(require("crypto"));
const winston_1 = __importDefault(require("../../core/config/winston"));
const path_1 = require("path");
class UserService {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.find();
        });
    }
    ;
    findUser(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_1.default.findOne({ userEmail: userEmail });
        });
    }
    ;
    insertUser(userModel) {
        return new Promise((resolve, reject) => {
            crypto_1.default.randomBytes(64, (err, buf) => {
                if (err) {
                    reject(err);
                }
                crypto_1.default.pbkdf2(userModel.userPwd, buf.toString('base64'), 102391, 64, 'sha512', (err, key) => {
                    let user = new user_1.default();
                    console.log(userModel);
                    user.userPwd = key.toString('base64');
                    user.salt = buf.toString('base64');
                    user.save((err) => {
                        if (err) {
                            reject(err);
                        }
                        resolve('success');
                    });
                });
            });
        });
    }
    ;
    updateUser(userModel, userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userModel.userEmail !== userEmail) {
                throw new Error('400');
            }
            const user = yield user_1.default.findOne({ userEmail: userEmail });
            crypto_1.default.pbkdf2(userModel.userPwd, user.salt, 102391, 64, 'sha512', (err, key) => {
                let newPassword = key.toString('base64');
                const updateUser = user_1.default.findOneAndUpdate({ userEmail: user.userEmail }, { $set: { "userPwd": newPassword } })
                    .then((result) => {
                    winston_1.default.info(result);
                    path_1.resolve('success');
                });
            });
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map