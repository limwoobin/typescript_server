import CategoryModel from '../../models/category';

// const CategoryService = {};

// CategoryService.getCategories = (type) => {
//     if(type !== undefined) {
//         return CategoryModel.find()
//                     .where('type').equals(type);
//     }
//     return CategoryModel.find();
// }

// module.exports = CategoryService;

export default class CategoryService {
    async getCategories() {
        return CategoryModel.find();
    }
}

// const categoryService = new CategoryService();
// module.exports = categoryService;