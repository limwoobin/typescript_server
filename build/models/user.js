"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_auto_increment_1 = __importDefault(require("mongoose-auto-increment"));
const connection = mongoose_1.default.createConnection('mongodb://127.0.0.1:27017/drogbalog');
mongoose_auto_increment_1.default.initialize(connection);
const User = new mongoose_1.default.Schema({
    id: { type: Number, required: true, unique: true },
    userEmail: { type: String, required: true, unique: true },
    userPwd: { type: String },
    salt: { type: String },
    userName: { type: String },
    birthday: { type: Date },
    createdAt: { type: Date, default: Date.now }
});
User.plugin(mongoose_auto_increment_1.default.plugin, {
    model: 'user',
    field: 'id',
    startAt: 1,
    increment: 1
});
exports.default = mongoose_1.default.model('User', User);
//# sourceMappingURL=user.js.map