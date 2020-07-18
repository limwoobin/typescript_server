import { CategoryTypeCode } from '../code/CategoryTypeCode';

export type CategoryModel = {
    _id: string;
    name: string;
    type: string;
    code: string;
    routerName: string;
}