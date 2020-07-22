export default interface IChildComment {
    childCommentId: string,
    board: string,
    commentId: number,
    userEmail: string,
    content: string,
    createdAt: Date,
    updatedAt: Date
}