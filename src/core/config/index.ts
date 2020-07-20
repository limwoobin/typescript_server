import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// const envFount = dotenv.config();
// if (envFount.error) {
//     // This error should crash whole process
//     throw new Error("⚠Couldn't find .env file  ⚠️");
// }

export default {
   /**
   * Your favorite port
   */
  port: process.env.PORT || 4000,

  /**
   * That long string from mlab
   */
  databaseURL: process.env.MONGODB_URI,

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
}