import { Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from 'src/adapter/repository/post.repository';
import { PostEntity } from '../entity/post.entity';

@Injectable()
export class PostService {
    constructor(private readonly postRepository: PostRepository) {}

    getPostById(id: number): PostEntity {
        const postById = this.postRepository.getPosts().filter((post) => {
            return post.id == id;
        });

        if (postById.length === 0) {
            throw new NotFoundException(`Post ${id} not found!`);
        }

        return postById[0];
    }
}
