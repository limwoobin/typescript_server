import { StringNullableChain } from "lodash";

interface UserInfo {
    username: string;
    password: string;
    age?    : number;
    address?: string;
}

const userInfo: UserInfo = {
    username: 'drogba02@naver.com',
    password : '1234',
    age : 50
}

console.log(userInfo);


