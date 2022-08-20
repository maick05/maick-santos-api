import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from '../../src/adapter/controller/post.controller';
import { PostModule } from '../../src/adapter/post.module';

describe('PostController', () => {
    let postController: PostController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [PostModule],
            controllers: [],
            providers: []
        }).compile();

        postController = app.get<PostController>(PostController);
    });

    describe('getPostById', () => {
        it('Should call getPostById and return the correct array of posts', () => {
            const actual = postController.getPostById(5);

            expect(JSON.stringify(actual)).toBe(
                JSON.stringify({
                    userId: 1,
                    id: 5,
                    title: 'nesciunt quas odio',
                    body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
                })
            );
        });
    });
});
