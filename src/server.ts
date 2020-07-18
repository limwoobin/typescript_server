import express from 'express';
const app = express();
import history from 'connect-history-api-fallback';
import router from './routes/router';
import settings from './routes/settings';
import logger from './core/config/winston';
const config = require('./core/config/config.json');
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
// app.use(history());
// app.use('/' , express.static(__dirname + "/../../typescript_web/build"));
app.get('/' , (req: express.Request , res: express.Response) => {
    return res.json('drogbalog api server')
});

app.use('/dr' , router);
app.use((err: express.ErrorRequestHandler , req: express.Request , res: express.Response , next: express.NextFunction) => {
    logger.info(err);
    return res.status(500);
});

const port: (string | number) = process.env.PORT || 4000;
app.listen(port , () => {
    logger.info(`Listening on port ${port}`);
})