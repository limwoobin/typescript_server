import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();
const router = express.Router();
const db = require('./dbConnection');

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use(db);

console.log('Settings!!!')

export default router;