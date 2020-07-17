import * as mongoose from 'mongoose';
import CategoryTypes from './types/CategoryTypes';
import { CategoryTypeCode } from '../core/code/CategoryTypeCode';

const Category = new mongoose.Schema({
    name       : {type: String , required: true},
    type       : {type: String , required: true},
    routerName : {type: CategoryTypeCode},
});

export default mongoose.model<CategoryTypes & mongoose.Document>('Category' , Category);