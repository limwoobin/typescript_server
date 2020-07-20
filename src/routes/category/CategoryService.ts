import { Service, Inject } from 'typedi';
import { CategoryRepository } from './CategoryRepository';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { Container } from 'typedi';

@Service()
export default class CategoryService {
    constructor(
        private categoryRepository: CategoryRepository
    ) {}

    public async getCategories(type: CategoryTypeCode | undefined) {
        if (type) {
            return this.categoryRepository.findByType(type);
        }
        return this.categoryRepository.find();
    }
}
