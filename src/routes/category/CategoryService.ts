// import CategoryModel from '../../models/category';
const CategoryModel = require('../../models/category');

export default class CategoryService {

    async getCategories(type:string | undefined) {
        if(type !== undefined) {
            return CategoryModel.find()
                                .where('type').equals(type);
        }
        return CategoryModel.find();
    }
}