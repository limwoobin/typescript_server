import * as express from 'express';
const router = express.Router();
import CategoryService from './CategoryService';
import { Response, ResponseException } from '../../core/response/ResponseType';
import { CategoryTypeCode } from '../../core/code/CategoryTypeCode';
import { CategoryModel } from '../../core/model/CategoryModel';
import logger from '../../core/config/winston';
import { Container } from 'typedi';

const categoryService = Container.get(CategoryService);

router.get('/list' , async (req: express.Request , res: express.Response) => {
    const type: CategoryTypeCode = req.query.type as any;
    logger.info('type:' + type);

    const result = new Response<CategoryModel[]>();

    try {
        const categories: CategoryModel[] | any = await categoryService.getCategories(type);
        result.data = categories;
    } catch (err) {
        logger.info("message:" + err.message);
        return res.json(new ResponseException(err.message));
    }

    return res.json(result);
});

export default router;




// @JsonController('/category')
// export default class CategoryRoute {
//     constructor(
//         private categoryService: CategoryService
//     ){}

//     @HttpCode(200)
//     @Get('/list')
//     public async getCategories(req: express.Request , res: express.Response) {
//         const type: CategoryTypeCode = req.query.type as any;
//         logger.info('type:' + type);
    
//         const result = new Response<CategoryModel[]>();

//         try {
//             const categories: CategoryModel[] | any = await this.categoryService.getCategories(type);
//             result.data = categories;
//         } catch (err) {
//             logger.info("message:" + err.message);
//             return res.json(new ResponseException(err.message));
//         }
    
//         return res.json(result);
//     }
// };


