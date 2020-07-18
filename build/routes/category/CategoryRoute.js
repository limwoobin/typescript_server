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
// import {
//     JsonController,
//     Get,
//     HttpCode
// } from 'routing-controllers';
const router = express.Router();
const CategoryService_1 = __importDefault(require("./CategoryService"));
const ResponseType_1 = require("../../core/response/ResponseType");
const winston_1 = __importDefault(require("../../core/config/winston"));
router.get('/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.query.type;
    winston_1.default.info('type:' + type);
    const result = new ResponseType_1.Response();
    const categoryService = new CategoryService_1.default();
    try {
        const categories = yield categoryService.getCategories(type);
        result.data = categories;
    }
    catch (err) {
        winston_1.default.info("message:" + err.message);
        return res.json(new ResponseType_1.ResponseException(err.message));
    }
    return res.json(result);
}));
exports.default = router;
// @JsonController('/category')
// export default class CategoryRoute {
//     constructor(
//         private categoryService: CategoryService
//     ){}
//     @HttpCode(200)
//     @Get('/list')
//     public async getCategories(req: express.Request , res: express.Response) {
//         const type: CategoryTypeCode = req.query.type as any;
//         logger.info('type:' + type);
//         const result = new Response<CategoryModel[]>();
//         try {
//             const categories: CategoryModel[] | any = await this.categoryService.getCategories(type);
//             result.data = categories;
//         } catch (err) {
//             logger.info("message:" + err.message);
//             return res.json(new ResponseException(err.message));
//         }
//         return res.json(result);
//     }
// };
//# sourceMappingURL=CategoryRoute.js.map