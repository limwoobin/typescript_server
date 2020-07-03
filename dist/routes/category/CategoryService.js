"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = __importDefault(require("../../models/category"));
// const CategoryService = {};
// CategoryService.getCategories = (type) => {
//     if(type !== undefined) {
//         return CategoryModel.find()
//                     .where('type').equals(type);
//     }
//     return CategoryModel.find();
// }
// module.exports = CategoryService;
class CategoryService {
    getCategories(type) {
        if (type !== undefined) {
            return category_1.default.find()
                .where('type').equals(type);
        }
        return category_1.default.find();
    }
}
exports.default = CategoryService;
//# sourceMappingURL=CategoryService.js.map