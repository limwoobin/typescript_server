"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const MongodbConfig_1 = __importDefault(require("../core/config/MongodbConfig"));
const app = express_1.default();
const router = express_1.default.Router();
app.use(body_parser_1.default.json);
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
app.use(cors_1.default());
app.use(MongodbConfig_1.default);
console.log('Settings!!!');
exports.default = router;
//# sourceMappingURL=settings.js.map