import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import IComment from './interface/IComment';

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/drogbalog');

autoIncrement.initialize(connection);

const Comment = new mongoose.Schema({
    commentId       : {type: Number},
    board           : {type: mongoose.Schema.Types.ObjectId, ref: 'board' , required: true},
    post           : {type: mongoose.Schema.Types.ObjectId, ref: 'post' , required: true},
    userEmail       : {type: String, required: true},
    content         : {type: String, required: true},
    image           : {type: String},
    childComments   : [],
    createdAt       : {type: Date, default: Date.now},
    updatedAt       : {type: Date, default: Date.now},
});

Comment.plugin(autoIncrement.plugin , {
    model    : 'comment',
    field    : 'commentId',
    startAt  : 0,
    increment: 1
});

export default mongoose.model<IComment & mongoose.Document>('Comment' , Comment);