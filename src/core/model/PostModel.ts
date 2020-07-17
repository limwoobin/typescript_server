import { PostTypeCode } from '../code/PostTypeCode';
import { CommentModel } from './CommentModel';

export type PostModel = {
    _id: string;
    postId: number;
    userEmail: string;
    postType: PostTypeCode;
    title: string;
    content: string;
    comments: CommentModel[],
    views: number;
    createdAt: Date;
    updatedAt: Date
} 