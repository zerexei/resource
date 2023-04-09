import express from 'express';
import Post from '../controllers/Post';

const router = express.Router();


router.get('/', Post.index);
router.get('/:id', Post.show);
router.post('/', Post.store);
router.patch('/:id', Post.update);
router.delete('/:id', Post.destroy);

export default router;
