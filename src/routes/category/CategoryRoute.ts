import * as express from 'express';
const router = express.Router();
import CategoryService from './CategoryService';
import { Response, ResponseException } from '../../core/response/ResponseType';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { CategoryModel } from '../../core/model/CategoryModel';
import logger from '../../core/config/winston';
import { Container } from 'typedi';

router.get('/list' , async (req: express.Request , res: express.Response) => {
    const type: CategoryTypeCode = req.query.type as any;
    logger.info('type:' + type);

    const result = new Response<CategoryModel[]>();
    const categoryService = Container.get(CategoryService);

    try {
        const categories: CategoryModel[] | any = await categoryService.getCategories(type);
        result.data = categories;
    } catch (err) {
        console.log(err);
        logger.info("message:" + err.message);
        return res.json(new ResponseException(err.message));
    }

    return res.json(result);
});

export default router;
