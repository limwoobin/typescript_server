import { CategoryTypeCode } from '../code/CategoryTypeCode';

export type CategoryModel = {
    _id: string;
    name: string;
    routerName: string;
    type: CategoryTypeCode | any;
}