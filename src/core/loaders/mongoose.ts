import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';


export default async (): Promise<Db> => {
    const url = `mongodb://${config.databaseURL}:${config.databasePort}/${config.dbs}`;
    const connection = await mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });
    return connection.connection.db;
}