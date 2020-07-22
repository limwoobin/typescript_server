import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

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