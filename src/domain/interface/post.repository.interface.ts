import { PostEntity } from '../entity/post.entity';

export interface IPostRepository {
    getPosts(): PostEntity[];
}
