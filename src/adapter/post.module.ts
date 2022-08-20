import { Module } from '@nestjs/common';
import { PostController } from './controller/post.controller';
import { PostService } from '../domain/service/post.service';
import { PostRepository } from './repository/post.repository';

@Module({
    imports: [],
    controllers: [PostController],
    providers: [PostService, PostRepository]
})
export class PostModule {}
