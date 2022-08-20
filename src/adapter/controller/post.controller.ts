import { Controller, Get, Param } from '@nestjs/common';
import { PostEntity } from 'src/domain/entity/post.entity';
import { PostService } from '../../domain/service/post.service';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('/:id')
    getPost(@Param('id') id: number): PostEntity {
        return this.postService.getPostById(id);
    }
}
