import express from 'express';
import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import logger from '../config/winston';

export default async ({ expressApp } : { expressApp: any }) => {
    const mongoConnection = await mongooseLoader();
    logger.info('✌️ DB loaded and connected!');

    await expressLoader({ app: expressApp });
    logger.info(' Express Loaded');
}