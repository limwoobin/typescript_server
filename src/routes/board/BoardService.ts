import Board from '../../models/board';
import { Service , Inject } from 'typedi';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { BoardModel } from '../../core/model/BoardModel';
import BoardRepository from './BoardRepository';
import logger from '../../core/config/winston';

@Service()
export default class BoardService {
    constructor(
        private boardRepository: BoardRepository,
        @Inject('logger') private logger: any
    ) {}

    async getBoardList(boardType: CategoryTypeCode) : Promise<BoardModel[]> {
        logger.info('boardType:' + boardType);
        return this.boardRepository.getBoardList(boardType);
    };

    async getBoard(_id: string) : Promise<BoardModel> {
        return await this.boardRepository.getBoard(_id);
    };

    async writeBoard(boardData: any) : Promise<BoardModel>{
        return this.boardRepository.boardSave(boardData);
    };

    async updateBoard(boardData: any) : Promise<void>{
        this.boardRepository.updateBoard(boardData);
    };

    async deleteBoard(boardData: any) : Promise<void> {
        this.boardRepository.deleteBoard(boardData);
    };

    async getRecentNotice() : Promise<BoardModel[]>{
        return await this.boardRepository.getRecentBoard();
    }
}