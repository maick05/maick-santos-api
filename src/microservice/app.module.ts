import { Module } from '@nestjs/common';
import { PostModule } from './adapter/post.module';
import { ViewModule } from './adapter/view.module';

@Module({
    imports: [PostModule, ViewModule],
    controllers: [],
    providers: []
})
export class AppModule {}
