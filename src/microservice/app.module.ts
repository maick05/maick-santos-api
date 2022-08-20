import { Module } from '@nestjs/common';
import { ViewController } from './adapter/controller/view.controller';
import { PostModule } from './adapter/post.module';

@Module({
    imports: [PostModule],
    controllers: [ViewController],
    providers: []
})
export class AppModule {}
