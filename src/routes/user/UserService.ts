import User from '../../models/user';
import { UserModel } from '../../core/model/UserModel';
import crypto from 'crypto';
import logger from '../../core/config/winston';
import { Service , Inject } from 'typedi';
import UserRepository from './UserRepository';

@Service()
export default class UserService {
    constructor(
        private userRepository: UserRepository,
        @Inject('logger') private logger: any,
    ) {}

    public async getUsers() : Promise<UserModel[]> {
        return await this.userRepository.getUsers();
    };

    public async findUser(userEmail: string) : Promise<UserModel | null> {
        return this.userRepository.findUser(userEmail);
    };

    public async insertUser(userModel: UserModel) {
        await crypto.randomBytes(64 , (err , buf) => {
            if (err) {
                throw new Error('500');
            }
            crypto.pbkdf2(userModel.userPwd , buf.toString('base64') , 102391 , 64 , 'sha512' , (err , key) => {
                userModel.userPwd = key.toString('base64');
                userModel.salt = buf.toString('base64'); 
                console.log(userModel);
                this.userRepository.save(userModel);
            })
        })
    };

    async updateUser(userModel: UserModel , userEmail: string) {
        if (userModel.userEmail !== userEmail) {
            throw new Error('400');   
        }

        const user: UserModel | any = await this.userRepository.findUser(userEmail);
        crypto.pbkdf2(userModel.userPwd , user.salt , 102391 , 64 , 'sha512' , (err , key) => {
            let newPassword = key.toString('base64');
            if (err) {
                throw new Error('500');
            }
            this.userRepository.findOneAndUpdate(userEmail , newPassword);
        });
    }
}