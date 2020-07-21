import { Container } from 'typedi';
import logger from '../config/winston';

export default () => {
    try {
        Container.set('logger' , logger);

    } catch (err) {
        logger.error('🔥 Error on dependency injector loader: %o', err);
        throw err;
    }
}