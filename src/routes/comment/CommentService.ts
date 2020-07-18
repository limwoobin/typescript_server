import Board from '../../models/board';
import Comment from '../../models/comment';
import { CommentModel } from '../../core/model/CommentModel';
import ChildComment from '../../models/childComment';

export default class CommentService {

    async getMyComments(userEmail: string) {
        return Comment.find({userEmail: userEmail});        
    }

    async writeComment(commentData: CommentModel) {
        if (commentData.commentId) {
            let childComment = new ChildComment();
            childComment.userEmail = commentData.userEmail;
            childComment.content = commentData.content;
            childComment.board = commentData._id;
            childComment.commentId = commentData.commentId;
            await childComment.save();
        } else {
            let comment = new Comment();
            comment.userEmail = commentData.userEmail;
            comment.content = commentData.content;
            comment.board = commentData._id;
            await comment.save();
        }
    };

    async getComments(id: string) {
        const comments: CommentModel[] | any = await Comment.find({board: id});
        async function setChildComments(c: number) {
            for (let c in comments) {
                await setChildValue(comments[c]);
            }
        };

        async function setChildValue(c: any) {
            const childComments: any = await ChildComment.find({commentId: c._id});
            if (childComments.length !== 0) {
                c.childComments = childComments;
            } 
        }

        setChildComments(comments);
        return comments;
    }

    async updateComment(board: any) {
        const updateBoard = await Board.findOneAndUpdate(
                                {
                                    userEmail: board.userEmail,
                                    id: board._id,
                                    comment: board.content
                                },
                                {
                                    comment: board.comment,
                                } , {new: true});
        
        return updateBoard;
    }
}