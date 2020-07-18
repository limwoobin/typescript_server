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
const mongoose_1 = __importDefault(require("mongoose"));
const winston_1 = __importDefault(require("./winston"));
const config = require('./config.json');
const db = mongoose_1.default.connection;
mongoose_1.default.Promise = global.Promise;
db.on('error', console.error);
db.once('open', () => {
    winston_1.default.info('Connected to mongo server');
});
const connectUri = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbs}`;
mongoose_1.default.connect(connectUri);
exports.default = router;
//# sourceMappingURL=MongodbConfig.js.map