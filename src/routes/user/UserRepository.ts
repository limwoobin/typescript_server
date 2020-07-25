import User from '../../models/user';
import { Document , Model } from 'mongoose';
import IUser from '../../models/interface/IUser';
import { UserModel } from '../../core/model/UserModel';

export default class UserRepository {

    constructor(private userModel: Model<IUser & Document>) {
        this.userModel = User;
    }

    async getUsers() : Promise<UserModel[]> {
        return await this.userModel.find();
    }

    async findUser(userEmail: string) : Promise<UserModel | null> {
        return await this.userModel.findOne({userEmail: userEmail});
    }

    async save(userModel: UserModel) : Promise<void> {
        let user = new User();
        user.userEmail = userModel.userEmail;
        user.userPwd = userModel.userPwd;
        user.salt = userModel.salt;
        user.birthday = userModel.birthday;
        user.createdAt = userModel.createdAt;
        await user.save();
    }

    async findOneAndUpdate(userEmail: string , password: string) : Promise<void> {
        await this.userModel.findOneAndUpdate({userEmail: userEmail} , 
            {$set: {"userPwd": password}});
    }
}