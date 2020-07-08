import * as express from 'express';
const router = express.Router();
import CategoryService from './CategoryService';
import HttpStatus from 'http-status';
import ResponseType from '../../core/code/ResponseType';
import CategoryTypeCode from '../../core/code/CategoryTypeCode';
const logger = require('../../config/winston');

router.get('/list' , async (req: express.Request , res: express.Response) => {
    logger.info('category...');
    const type: any = req.query.type || undefined;
    logger.info('type:' + type);

    const result = {} as ResponseType;
    result.code = HttpStatus.OK;
    result.message = HttpStatus["200"];
    const categoryService = new CategoryService();
    
    try {
        const categories = await categoryService.getCategories(type);
        result.data = categories;
    } catch (err) {
        console.log(err.message);
        result.code = HttpStatus.INTERNAL_SERVER_ERROR;
        result.message = HttpStatus["500"];
        result.error = err.message;
        return res.json(result);
    }

    return res.json(result);
})

type Category = {
    _id: string;
    name: string;
    routerName: string;
    type: string;
}

export default router;