export default interface CommentTypes {
    commentId: number,
    board: string,
    post: string,
    userEmail: string,
    content: string,
    childComments: [],
    createdAt: Date,
    updatedAt: Date
}