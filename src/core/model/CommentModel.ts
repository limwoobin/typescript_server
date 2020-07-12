export type CommentModel = {
    _id: string,
    commentId: number,
    userEmail: string,
    content: string,
    image: string,
    childComments: [],
    createdAt: Date;
    updatedAt: Date;
}