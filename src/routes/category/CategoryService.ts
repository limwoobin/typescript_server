import { Service, Inject } from 'typedi';
import { CategoryRepository } from './CategoryRepository';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { Container } from 'typedi';

const categoryRepository = Container.get(CategoryRepository);

@Service()
export default class CategoryService {
    constructor(
        // @Inject('categoryRepository') private categoryRepository: CategoryRepository
    ) {}

    public async getCategories(type: CategoryTypeCode | undefined) {
        if (type) {
            return categoryRepository.findByType(type);
        }
        return categoryRepository.find();
    }
}
