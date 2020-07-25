import * as express from 'express';
const router = express.Router();
import PostService from './PostService';
import { Response , ResponseException } from '../../core/response/ResponseType';
import logger from '../../core/config/winston';
import Util from '../../core/util/util';
import { PostModel } from '../../core/model/PostModel';
import { PostTypeCode } from '../../core/code/PostTypeCode';
import { Container } from 'typedi';

const util = new Util();

router.get('/list/:postType' , async (req: express.Request , res: express.Response) => {
    const result = new Response<PostModel[]>();
    const postService = Container.get(PostService);

    const postType: PostTypeCode | any = req.params.postType;
    logger.info('postType:' + postType);

    try {
        const posts = await postService.getPosts(postType);
        result.data = posts;
        logger.info('posts:' + posts);
    } catch (err) {
        return res.json(new ResponseException(err.message));
    }

    return res.json(result);
})

router.get('/view/:_id' , util.checkPostId , async (req: express.Request , res: express.Response) => {
    const result = new Response<PostModel>();
    const postService = Container.get(PostService);

    const _id: string = req.params._id;

    try {
        const post = await postService.getPost(_id);
        result.data = post;
        logger.info('post:' + post);
    } catch (err) {
        return res.json(new ResponseException(err.message));
    }

    return res.json(result);
})

router.get('/recent/posts' , async (req: express.Request , res: express.Response) => {
    const result = new Response<PostModel[]>();
    const postService = Container.get(PostService);

    try {
        const recentPost = await postService.getRecentPosts();
        result.data = recentPost;
        logger.info('recentPost:' + recentPost);
    } catch (err) {
        return res.json(new ResponseException(err.message));
    }

    return res.json(result);
})

router.post('/write' , async (req: express.Request , res: express.Response) => {
    const result = new Response<any>();
    const postService = Container.get(PostService);

    try {
        await postService.writePost(req.body);
    } catch (err) {
        return res.json(new ResponseException(err.message));
    }

    return res.json(result);
})

export default router;
