import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from '../src/adapter/controller/post.controller';
import { AppService } from './app.service';

describe('AppController', () => {
    let appController: PostController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [PostController],
            providers: [AppService]
        }).compile();

        appController = app.get<PostController>(PostController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
