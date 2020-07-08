import * as express from 'express';
const router = express.Router();
import CategoryService from './CategoryService';
import HttpStatus from 'http-status';
import Response from '../../core/code/ResponseType';
import CategoryTypeCode from '../../core/code/CategoryTypeCode';
const logger = require('../../config/winston');

router.get('/list' , async (req: express.Request , res: express.Response) => {
    logger.info('category...');
    const type: CategoryTypeCode = req.query.type as any;
    logger.info('type:' + type);

    const result = new Response<Category[]>();
    const categoryService = new CategoryService();
    
    try {
        const categories: Category[] = await categoryService.getCategories(type);
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

// type Category = {
//     _id: string;
//     name: string;
//     routerName: string;
//     type: string;
// }

// type ResponseConfig<T> = { code: HttpStatusCode, message: string; data: T; error?: any };

// class Response<T> {
//     code: HttpStatusCode = HttpStatusCode.OK;
//     message: string;
//     data: T;
//     error: any;
    
//     Response(config:ResponseConfig<T>) {
//         this.code = config.code;
//         this.message = config.message;
//         this.data = config.data;
//         this.error = config.error;
//     }
// }

// enum HttpStatusCode {
//     OK = 200,
//     NOT_FOUND = 404,
// }



// class ResponseBuilder<T> {
//     private instance = new Response<T>();
//     code(code: HttpStatusCode) {
//         this.instance.code = code;
//         return this;
//     }
//     message(message: string) {
//         this.instance.message = message;
//         return this;
//     }
//     data(data: T) {
//         this.instance.data = data;
//         return this;
//     }
//     error(error: any) {
//         this.instance.error = error;
//         return this;
//     }
//     build() {
//         return this.instance;
//     }
// }






export default router;
