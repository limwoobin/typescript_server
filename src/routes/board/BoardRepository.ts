import Board from '../../models/board';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import {Document , Model} from 'mongoose';
import BoardTypes from '../../models/types/BoardTypes';

export default class BoardRepository {

    constructor(private boardModel: Model<BoardTypes & Document>) {
        this.boardModel = Board;
    }

    public async getBoardList(boardType: CategoryTypeCode) {
        return this.boardModel.find({boardType: boardType});
    };
}