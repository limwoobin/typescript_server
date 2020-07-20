import express from 'express';
import dbConnect from '../core/config/MongodbConfig';
const app = express();
const router = express.Router();

app.use(dbConnect);

console.log('Settings!!!')

export default router;