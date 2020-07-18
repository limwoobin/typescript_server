export default interface ChildCommentTypes {
    childCommentId: string,
    board: string,
    commentId: number,
    userEmail: string,
    content: string,
    createdAt: Date,
    updatedAt: Date
}