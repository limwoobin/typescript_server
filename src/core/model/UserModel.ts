export type UserModel = {
    id: number;
    userEmail: string;
    userPwd: string;
    salt: string;
    userName: string;
    birthda: Date;
    createdAt: Date;
}