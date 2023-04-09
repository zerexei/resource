import express from 'express';
import Post from '../controllers/Post';

const router = express.Router();


router.get('/', Post.index);

export default router;
