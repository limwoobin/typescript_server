import { Service, Inject } from 'typedi';
import CategoryRepository from './CategoryRepository';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { CategoryModel } from '../../core/model/CategoryModel';

@Service()
export default class CategoryService {
    constructor(
        private categoryRepository: CategoryRepository,
        @Inject('logger') private logger: any,
    ) {}

    public async getCategories(type: CategoryTypeCode | undefined) : Promise<CategoryModel[]>{
        if (type) {
            return this.categoryRepository.findByType(type);
        }
        return this.categoryRepository.find();
    }
}
