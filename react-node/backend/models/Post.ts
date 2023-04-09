import Model from "./Model";

export interface NewPostType {
    title: string;
    content?: string;
    published?: boolean;
}

export default class extends Model {
    async create(data: NewPostType) {
        const post = await this._db.post.create({ data })
        // await this._db.$disconnect();
        return post;
    }

}