import { CategoryTypeCode } from '../code/CategoryTypeCode';
import { CommentModel } from './CommentModel';

export type BoardModel = {
    _id: string;
    boardId: number;
    userEmail: string;
    boardType: CategoryTypeCode;
    title: string;
    content: any;
    comments: CommentModel[];
    views: number;
    createdAt: Date;
    updatedAt: Date;
}