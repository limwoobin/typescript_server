import CategoryTypeCode from '../../core/code/CategoryTypeCode';

export default interface BoardTypes {
    boardId: number,
    userEmail: string,
    boardType: CategoryTypeCode,
    title: string,
    content: any,
    comments: [],
    views: number,
    regDate: Date,
    modiDate: Date
};