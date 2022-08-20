import { NestFactory } from '@nestjs/core';
import { PostModule } from './microservice/adapter/post.module';

async function bootstrap() {
    const app = await NestFactory.create(PostModule);
    await app.listen(3000);
}
bootstrap();
