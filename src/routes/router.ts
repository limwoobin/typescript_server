import * as express from 'express';
const router = express.Router();
import categoryRouter from './category/CategoryRoute';
import boardRouter from './board/BoardRoute';
import commentRouter from './comment/CommentRoute';
import userRouter from './user/UserRoute';
import postRouter from './post/PostRoute';
import mailRouter from './mail/MailRoute';

router.use('/category' , categoryRouter);
router.use('/board' , boardRouter);
router.use('/user' , userRouter);
router.use('/comment' , commentRouter);
router.use('/post' , postRouter);
router.use('/mail' , mailRouter);

export default router;