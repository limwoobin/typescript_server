import categoryModel from '../../models/category';
import { Service , Inject } from 'typedi';
import { CategoryModel } from '../../core/model/CategoryModel';

@Service()
export default class CategoryService {
    constructor(
        // @Inject('categoryModel') private categoryModel: CategoryModel
    ) {}

    async getCategories(type: string | undefined) {
        if(type) {
            return categoryModel.find()
                           .where('type').equals(type);
        }        
        return categoryModel.find();
    }
}
