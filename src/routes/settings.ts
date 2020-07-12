import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dbConnect from '../core/config/MongoRepository';
const app = express();
const router = express.Router();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use(dbConnect);

console.log('Settings!!!')

export default router;