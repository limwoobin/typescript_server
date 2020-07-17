import User from '../../models/user';
import { UserModel } from '../../core/model/UserModel';
import crypto from 'crypto';
import logger from '../../core/config/winston';
import { resolve } from 'path';

export default class UserService {
    async getUsers() {
        return await User.find();
    };

    async findUser(userEmail: string) {
        return User.findOne({userEmail: userEmail});
    };

    insertUser(userModel: UserModel) {
        return new Promise((resolve , reject) => {
            crypto.randomBytes(64, (err, buf) => {
                if (err) {
                    reject(err);
                }
                crypto.pbkdf2(userModel.userPwd , buf.toString('base64'), 102391, 64, 'sha512', (err, key) => {
                    let user = new User();
                    console.log(userModel);
                    user.userPwd = key.toString('base64');
                    user.salt = buf.toString('base64');
                    user.save((err) => {
                        if (err) {
                            reject(err);
                        }
                        resolve('success');
                    });
                });
            });
        })
    };

    async updateUser(userModel: UserModel , userEmail: string) {
        if (userModel.userEmail !== userEmail) {
            throw new Error('400');   
        }

        const user: UserModel | any = await User.findOne({userEmail: userEmail});
        crypto.pbkdf2(userModel.userPwd , user.salt , 102391 , 64 , 'sha512' , (err , key) => {
            let newPassword = key.toString('base64');
            const updateUser = User.findOneAndUpdate({userEmail: user.userEmail},
            {$set: {"userPwd": newPassword}})
            .then((result: any) => {
            logger.info(result);
            resolve('success');
            })
        });
    }
}