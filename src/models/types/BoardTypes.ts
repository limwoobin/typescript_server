import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { CommentModel } from '../../core/model/CommentModel';

export default interface BoardTypes {
    boardId: number,
    userEmail: string,
    boardType: CategoryTypeCode,
    title: string,
    content: any,
    comments: CommentModel[],
    views: number,
    createdAt: Date,
    updatedAt: Date
};