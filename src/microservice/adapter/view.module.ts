import { Module } from '@nestjs/common';
import { PostService } from '../domain/service/post.service';
import { PostRepository } from './repository/post.repository';
import { ViewController } from './controller/view.controller';

@Module({
    imports: [],
    controllers: [ViewController],
    providers: [PostService, PostRepository]
})
export class ViewModule {}
