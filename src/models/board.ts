import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import BoardTypes from './types/BoardTypes';
import Util from '../core/util/util';
const connection = mongoose.createConnection(new Util().dbConnect());

autoIncrement.initialize(connection);


const Board = new mongoose.Schema({
    boardId     : {type: Number},
    userEmail   : {type: String , required: true},
    boardType   : {type: String , required: true },
    title       : {type: String , required: true},
    content     : {type: String},
    comments    : {type: []},
    views       : {type: Number , default: 0},
    createdAt   : {type: Date , default: Date.now },
    updatedAt   : {type: Date , default: Date.now }
});

Board.plugin(autoIncrement.plugin , {
    model       : 'board',
    field       : 'boardId',
    startAt     : 1,
    increment   : 1
});

export default mongoose.model<BoardTypes & mongoose.Document>('Board' , Board);