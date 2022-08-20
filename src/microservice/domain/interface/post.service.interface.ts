import { PostEntity } from '../entity/post.entity';

export interface IPostService {
    getPostById(id: number): PostEntity;
    getPosts(): PostEntity[];
}
