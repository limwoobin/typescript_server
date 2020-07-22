import Category from '../../models/category';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { Document , Model } from 'mongoose';
import CategoryTypes from '../../models/types/CategoryTypes';
import { Inject } from 'typedi';
import { CategoryModel } from '../../core/model/CategoryModel';

export default class CategoryRepository {

    constructor (private categoryModel: Model<CategoryTypes & Document>) {
        this.categoryModel = Category;
    }

    public async find() : Promise<CategoryModel[]> {
        return await this.categoryModel.find();
    }

    public async findByType(type: CategoryTypeCode) : Promise<CategoryModel[]> {
        return await this.categoryModel.find()
                        .where('type').equals(type);
    }
}