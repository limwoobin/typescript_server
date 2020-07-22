import * as mongoose from 'mongoose';
import ICategory from './types/ICategory';
import { CategoryTypeCode } from '../core/code/CategoryTypeCode';

const Category = new mongoose.Schema({
    name       : {type: String , required: true},
    type       : {type: String , required: true},
    code       : {type: String , required: true},
    routerName : {type: CategoryTypeCode},
});

export default mongoose.model<ICategory & mongoose.Document>('Category' , Category);