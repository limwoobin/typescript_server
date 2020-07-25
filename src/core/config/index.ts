import path from 'path';
import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

if (process.env.NODE_ENV === 'prod') {
  dotenv.config({path: path.join(__dirname, '../../../.env.prod')});
} else {
  dotenv.config({path: path.join(__dirname, '../../../.env.dev')});
}

export default {
   /**
   * Your favorite port
   */
  port: process.env.PORT || 4000,

  /**
   * That long string from mlab
   */
  databaseURL: process.env.MONGODB_URI || '127.0.0.1',
  databasePort: process.env.MONGODB_PORT || 27017,
  dbs: "drogbalog",
  // dbs: "mongodb_tutorial",

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET,

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'info',
  },

  prefix: '/dr'
}