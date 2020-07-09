import { CategoryTypeCode } from '../code/CategoryTypeCode';

export type BoardModel = {
    _id: string;
    boardId: number;
    userEmail: string;
    boardType: CategoryTypeCode;
    title: string;
    content: any;
    comments: [];
    views: number;
    regDate: Date;
    modiDate: Date;
}