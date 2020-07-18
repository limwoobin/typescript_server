import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import UserTypes from './types/UserTypes';

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/drogbalog');

autoIncrement.initialize(connection);

const User = new mongoose.Schema({
    id              : {type: Number , required: true , unique: true},
    userEmail       : {type: String , required: true , unique: true},
    userPwd         : {type: String},
    salt            : {type: String},
    userName        : {type: String},
    birthday        : {type: Date},
createdAt       : {type: Date , default: Date.now}
});

User.plugin(autoIncrement.plugin , {
    model       : 'user',
    field       : 'id',
    startAt     : 1,
    increment   : 1
});

export default mongoose.model<UserTypes & mongoose.Document>('User' , User);