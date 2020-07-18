import categoryModel from '../../models/category';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { CategoryRepository } from './CategoryRepository';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';

const categoryRepository = new CategoryRepository();

@Service()
export default class CategoryService {
    // constructor(
    //     @InjectRepository() private categoryRepository: CategoryRepository
    // ) {}

    public async getCategories(type: CategoryTypeCode | undefined) {

        if(type) {
            return categoryRepository.findByType(type);
        }        
        return categoryRepository.find();
    }
}
