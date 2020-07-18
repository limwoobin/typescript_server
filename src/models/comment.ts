import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import CommentTypes from './types/CommentTypes';
import Util from '../core/util/util';
const connection = mongoose.createConnection(new Util().dbConnect());

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

export default mongoose.model<CommentTypes & mongoose.Document>('Comment' , Comment);