import { Controller, Get, Param, Render } from '@nestjs/common';
import { PostEntity } from 'src/microservice/domain/entity/post.entity';
import { PostService } from '../../domain/service/post.service';

@Controller('view')
export class ViewController {
    constructor(private readonly postService: PostService) {}

    @Get()
    @Render('index')
    root(): any {
        return {};
    }

    @Get('/post/:id')
    @Render('post')
    postDetails(@Param('id') id: number): PostEntity {
        return this.postService.getPostById(id);
    }
}
