import * as express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
const config = require('../../config/config.json');
const logger = require('../../config/winston');
const db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error' , console.error);
db.once('open' , () => {
    logger.info('Connected to mongo server');
})

const connectUri = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbs}`;
mongoose.connect(connectUri);

export default router;