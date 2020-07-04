import * as express from 'express';
const router = express.Router();
import CategoryService from './CategoryService';
const common = require('../../common/common');
const logger = require('../../config/winston');

router.get('/list' , async (req: express.Request , res: express.Response) => {
    logger.info('category...');
    const type:any = req.query.type || undefined;
    logger.info('type:' + type);
    const result = common.result;
    result.code = 'DR00'
    result.message = common.status.DR00;
    try {
        const categoryService = new CategoryService();
        const categories = await categoryService.getCategories(type);
        result.data = categories;
    } catch (err) {
        console.log(err.message);
        result.code = 'DR01';
        result.message = common.status.DR01;
        result.data = err;
        return res.json(result);
    }

    return res.json(result);
})

export default router;