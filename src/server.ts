import 'reflect-metadata';
import express from 'express';
const app = express();
import router from './routes/router';
import logger from './core/config/winston';
import config from './core/config';


async function start() {
    app.use(config.prefix , router);
    await require('./core/loaders').default({ expressApp: app });

    app.listen(config.port , () => {
        logger.info(`
          ################################################
          🛡️  Server listening on port: ${config.port} 🛡️ 
          ################################################
        `);
    });   
}

start();