import { Service } from 'typedi';
import { CategoryRepository } from './CategoryRepository';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { Container } from 'typedi';
import Category from '../../models/category';

const categoryRepository = Container.get(CategoryRepository);

@Service()
export default class CategoryService {

    public async getCategories(type: CategoryTypeCode | undefined) {

        if (type) {
            return categoryRepository.findByType(type);
        }
        return categoryRepository.find();
    }
}
