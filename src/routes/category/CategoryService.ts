// import CategoryModel from '../../models/category';
const CategoryModel = require('../../models/category');

export default class CategoryService {

    async getCategories(type:string) {
        console.log('------------');
        if(type !== undefined) {
            return CategoryModel.find()
                                .where('type').equals(type);
        }
        return CategoryModel.find();
    }
}