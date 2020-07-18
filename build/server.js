"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const router_1 = __importDefault(require("./routes/router"));
const settings_1 = __importDefault(require("./routes/settings"));
const winston_1 = __importDefault(require("./core/config/winston"));
const config = require('./core/config/config.json');
// import redis from 'redis';
// import connectRedis from 'connect-redis';
// const client = redis.createClient();
const passport_1 = __importDefault(require("passport"));
const compression_1 = __importDefault(require("compression"));
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
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(compression_1.default());
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});
app.use(settings_1.default);
// app.use(history());
// app.use('/' , express.static(__dirname + "/../../typescript_web/build"));
app.get('/', (req, res) => {
    return res.json('drogbalog api server');
});
app.use('/dr', router_1.default);
app.use((err, req, res, next) => {
    winston_1.default.info(err);
    return res.status(500);
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    winston_1.default.info(`Listening on port ${port}`);
});
//# sourceMappingURL=server.js.map