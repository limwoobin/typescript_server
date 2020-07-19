import { Service, Inject } from 'typedi';
import { CategoryRepository } from './CategoryRepository';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { Container } from 'typedi';
import TestclassService from './testService';

const categoryRepository = Container.get(CategoryRepository);

@Service()
export default class CategoryService {
    constructor(
    ) {}

    public async getCategories(type: CategoryTypeCode | undefined) {
        if (type) {
            return categoryRepository.findByType(type);
        }
        return categoryRepository.find();
    }
}
