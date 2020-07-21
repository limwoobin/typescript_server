import { Service, Inject } from 'typedi';
import { CategoryRepository } from './CategoryRepository';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import logger from '../../core/config/winston';

@Service()
export default class CategoryService {
    constructor(
        private categoryRepository: CategoryRepository,
        @Inject('logger') private logger: any,
    ) {}

    public async getCategories(type: CategoryTypeCode | undefined) {
        if (type) {
            return this.categoryRepository.findByType(type);
        }
        return this.categoryRepository.find();
    }
}
