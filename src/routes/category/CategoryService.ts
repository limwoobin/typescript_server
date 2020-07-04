import Category from '../../models/category';

export default class CategoryService {

    async getCategories(type:string | undefined) {
        if(type !== undefined) {
            return Category.find()
                                .where('type').equals(type);
        }
        return Category.find();
    }
}