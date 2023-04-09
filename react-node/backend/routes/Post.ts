import express from 'express';
import multer from 'multer';
import Post from '../controllers/Post';

const router = express.Router();
const upload = multer();

router.get('/', upload.none(), Post.index);
router.get('/:id', upload.none(), Post.show);
router.post('/', upload.none(), Post.store);
router.patch('/:id', upload.none(), Post.update);
router.delete('/:id', upload.none(), Post.destroy);

export default router;
