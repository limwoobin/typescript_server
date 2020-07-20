import { Container } from 'typedi';
import { CategoryRepository } from '../../routes/category/CategoryRepository';
import logger from './winston';

export default () => {
    try {
        Container.set('logger' , logger);
        Container.set('categoryRepository' , CategoryRepository);
    } catch (err) {
        logger.error('🔥 Error on dependency injector loader: %o', err);
        throw err;
    }
}