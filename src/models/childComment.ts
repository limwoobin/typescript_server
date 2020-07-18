import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import ChildCommentTypes from './types/ChildCommentTypes';
import Util from '../core/util/util';
const connection = mongoose.createConnection(new Util().dbConnect());

autoIncrement.initialize(connection);

const ChildComment = new mongoose.Schema({
    childCommentId : {tpye: Number},
    board          : {type: mongoose.Schema.Types.ObjectId, ref: 'board' , required: true},
    post           : {type: mongoose.Schema.Types.ObjectId, ref: 'post' , required: true},
    commentId      : {type: mongoose.Schema.Types.ObjectId, ref: 'comment' , required: true},
    userEmail      : {type: String},
    content        : {type: String},
    createdAt      : {type: Date , default: Date.now},
    updatedAt      : {type: Date , default: Date.now},
})

ChildComment.plugin(autoIncrement.plugin , {
    model    :     'childComment',
    field    :     'childCommentId',
    startAt  :     1,
    increment:     1   
});

export default mongoose.model<ChildCommentTypes & mongoose.Document>('ChildComment' , ChildComment);
