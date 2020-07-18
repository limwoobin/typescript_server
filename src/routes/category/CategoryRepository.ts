import { EntityRepository , Repository } from 'typeorm';
import Category from '../../models/category';
import CategoryTypes from '../../models/types/CategoryTypes';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';

@EntityRepository(Category)
export class CategoryRepository extends Repository<CategoryTypes> {

    async find() {
        return Category.find();
    }

    async findByType(type: CategoryTypeCode) {
        return Category.find()
                        .where('type').equals(type);
    }
}