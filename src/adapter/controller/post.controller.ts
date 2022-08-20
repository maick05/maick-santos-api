import { Controller, Get, Param } from '@nestjs/common';
import { PostEntity } from '../../domain/entity/post.entity';
import { PostService } from '../../domain/service/post.service';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('/:id')
    getPostById(@Param('id') id: number): PostEntity {
        return this.postService.getPostById(id);
    }

    @Get('/')
    getPosts(): PostEntity[] {
        return this.postService.getPosts();
    }
}
