import 'reflect-metadata';
import express from 'express';
const app = express();
import router from './routes/router';
import settings from './routes/settings';
import logger from './core/config/winston';
import config from './core/config';
import session from 'express-session';
// import redis from 'redis';
// import connectRedis from 'connect-redis';
// const client = redis.createClient();
import passport from 'passport';
import compression from 'compression';


// let redisStore = connectRedis(session);

// app.use(session({
//     store: new redisStore({
//         host: config.redis.host,
//         port: config.redis.port,
//         client: client,
//         ttl:200
//     }),
//     secret: config.session.secret,
//     cookie: {
//         maxAge: 1000 * 60 * 60
//     },
//     saveUninitialized: false,
//     resave: false
// }));

app.use(passport.initialize());
app.use(passport.session());
app.use(compression());

app.all('/*' , (req: express.Request , res: express.Response , next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers' , 'X-Requested-With');
    next();
});

app.use(settings);
app.get('/' , (req: express.Request , res: express.Response) => {
    return res.json('drogbalog api server')
});

app.use('/dr' , router);
app.use((err: express.ErrorRequestHandler , req: express.Request , res: express.Response , next: express.NextFunction) => {
    logger.info(err);
    return res.status(500);
});


async function start() {

    // await require('./core/loaders').default({ expressApp: app });

    app.listen(config.port , () => {
        logger.info(`
          ################################################
          🛡️  Server listening on port: ${config.port} 🛡️ 
          ################################################
        `);
    });   
}

start();