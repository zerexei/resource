import { PrismaClient } from '@prisma/client';
import Post, { NewPostType } from '../models/Post';
import { Request, Response } from 'express';
const prisma = new PrismaClient();

const post_model = new Post();
export default {
    async index(req: Request, res: Response) {
        const posts = await post_model.all();
        res.send(posts);
    },
    async show(req: Request, res: Response) {
        const post = await post_model.find(req.params.id);
        res.send(post);
    },
    async store(req: Request, res: Response) {
        const new_post: NewPostType = {
            title: req.body.title,
            content: req.body.content,
            published: req.body?.published ? true : false,
        };
        const post = await post_model.create(new_post);
        res.send(post);
    },
    update() {
        return 'post/update';
    },
    destroy() {
        return 'post/destroy';
    },
};
