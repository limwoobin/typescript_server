import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from '../config/winston';
import compression from 'compression';
import session from 'express-session';
import passport from 'passport';
// import redis from 'redis';
// import connectRedis from 'connect-redis';
// const client = redis.createClient();


export default ({ app } : { app: express.Application }) => {

    /**
     * Health Check endpoints
     */
    app.get('/status', (req: express.Request , res: express.Response) => {
        res.status(200).end();
    });

    app.get('/' , (req: express.Request , res: express.Response) => {
        return res.json('drogbalog api server')
    });
    
    app.use((err: express.ErrorRequestHandler , req: express.Request , res: express.Response , next: express.NextFunction) => {
        logger.info(err);
        return res.status(500);
    });

    app.all('/*' , (req: express.Request , res: express.Response , next: express.NextFunction) => {
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Headers' , 'X-Requested-With');
        next();
    });

    app.use((req, res, next) => {
        const err: any = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });
    
      /// error handlers
    app.use((err: any, req: express.Request, res: express.Response , next: express.NextFunction) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
        return res
            .status(err.status)
            .send({ message: err.message })
            .end();
    }
        return next(err);
    });
    app.use((err: any, req: express.Request, res: express.Response , next: express.NextFunction) => {
        res.status(err.status || 500);
        res.json({
            code: err.status,
            message: err.message,
        });
    });

    app.enable('trust proxy');
    app.use(cors());
    app.use(require('method-override'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(compression());

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
}