import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import IPost from './interface/IPost';
import { PostTypeCode } from '../core/code/PostTypeCode';

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/drogbalog');

autoIncrement.initialize(connection);

const Post = new mongoose.Schema({
    postId      : {type: Number},
    userEmail   : {type: String , required: true},
    postType    : {type: PostTypeCode , required: true},
    title       : {type: String , required: true},
    content     : {type: String},
    comments    : {type: []},
    views       : {type: Number , default: 0},
    createdAt   : {type: Date , default: Date.now},
    updatedAt   : {type: Date , default: Date.now}
})

Post.plugin(autoIncrement.plugin , {
    model       : 'post',
    field       : 'postId',
    startAt     : 1,
    increment   : 1
})


export default mongoose.model<IPost & mongoose.Document>('Post' , Post);