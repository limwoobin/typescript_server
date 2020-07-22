export default interface IUser {
    id: string;
    userEmail: string;
    userPwd: string;
    salt: string;
    userName: string;
    birthday: Date;
    createdAt: Date;    
}