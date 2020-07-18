import * as express from 'express';
import MailService from './MailService';
const router = express.Router();
import { Response , ResponseException } from '../../core/response/ResponseType';
import logger from '../../core/config/winston';

const mailService = new MailService();

router.get('/password/find/:toEmail' , async (req: express.Request , res: express.Response) => {
    const result = new Response<any>();
    const toEmail: string = req.params.toEmail;

    try {
        const sendMail = await mailService.passwordFindMail(toEmail);
        result.data = sendMail;
        logger.info('sendMail:' + sendMail);
    } catch (err) {
        return res.json(new ResponseException(err.message)); 
}

    return res.json(result);
})

export default router;