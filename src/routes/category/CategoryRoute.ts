import * as express from 'express';
const router = express.Router();
import CategoryService from './CategoryService';
import { Response, ResponseException } from '../../core/response/ResponseType';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { CategoryModel } from '../../core/model/CategoryModel';
const logger = require('../../config/winston');

router.get('/list' , async (req: express.Request , res: express.Response) => {
    const type: CategoryTypeCode = req.query.type as any;
    logger.info('type:' + type);

    const result = new Response<CategoryModel[]>();
    const categoryService = new CategoryService();
    
    try {
        const categories: CategoryModel[] = await categoryService.getCategories(type);
        result.data = categories;
    } catch (err) {
        logger.info("message:" + err.message);
        return res.json(new ResponseException(err.message));
    }

    return res.json(result);
})


export default router;
