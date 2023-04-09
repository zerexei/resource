import Model from "./Model";

export interface PostType {
    title: string;
    content?: string;
    published?: boolean;
}

export interface NewPostType {
    title: string;
    content?: string;
    published?: boolean;
}

type UpdatePostType = PostType & {
    title?: string;
}

export default class extends Model {
    async all() {
        const posts = await this._db.post.findMany();
        return posts;
    }

    async find(id: number) {
        const post = await this._db.post.findFirstOrThrow({
            where: { id }
        });
        return post;
    }

    async create(data: NewPostType) {
        const post = await this._db.post.create({ data })
        await this._db.$disconnect();
        return post;
    }

    async update(id: number, post: UpdatePostType) {
        const updated_post = await this._db.post.update({
            where: { id },
            data: post
        });
        return updated_post;
    }

    async delete(id: number) {
        const post = await this._db.post.delete({
            where: { id }
        });
        return post;
    }


}