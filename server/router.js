import {Router} from 'express';

const router = Router();

router.route('/').get((req, res) => {
    res.send('hello from router  / get')
})

router.route('/login').get((req,res) => {
    res.send('hello from louter login get')
})
export default router;