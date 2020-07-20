import Category from '../../models/category';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import {Document , Model} from 'mongoose';
import CategoryTypes from '../../models/types/CategoryTypes';
import { Inject } from 'typedi';

export class CategoryRepository {

    constructor (private categoryModel: Model<CategoryTypes & Document>) {
        this.categoryModel = Category;
    }

    public async find() {
        console.log('sgojsgps');
        return await this.categoryModel.find();
    }

    public async findByType(type: CategoryTypeCode) {
        return await this.categoryModel.find()
                        .where('type').equals(type);
    }
}