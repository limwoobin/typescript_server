import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';

export default interface ICategory {
    name: string;
    type: string;
    code: string;
    routerName: CategoryTypeCode;    
}