import { PostTypeCode } from '../../core/code/PostTypeCode';
import { CommentModel } from '../../core/model/CommentModel';

export default interface IPost {
    postId: number,
    userEmail: string,
    postType: PostTypeCode,
    title: string,
    content: string,
    comments: CommentModel[],
    views: number,
    createdAt: Date,
    updatedAt: Date
}