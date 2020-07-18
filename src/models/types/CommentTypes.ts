export default interface CommentTypes {
    commentId: string,
    board: string,
    userEmail: string,
    content: string,
    childComments: [],
    createdAt: Date,
    updatedAt: Date
}