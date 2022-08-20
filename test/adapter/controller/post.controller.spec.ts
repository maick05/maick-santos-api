import { Test, TestingModule } from '@nestjs/testing';
import { PostRepository } from '../../../src/adapter/repository/post.repository';
import { PostService } from '../../../src/domain/service/post.service';
import { PostController } from '../../../src/adapter/controller/post.controller';
import * as sinon from 'sinon';

describe('PostController', () => {
    let postController: PostController;

    const mockPostService = {
        getPostById: () => {
            return;
        }
    };

    const mockPost = {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    };

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [PostController],
            providers: [
                {
                    provide: PostService,
                    useValue: mockPostService
                },
                PostRepository
            ]
        }).compile();

        postController = app.get<PostController>(PostController);
    });

    describe('getPostById', () => {
        it('Should call getPostById and return the correct post for position 1', () => {
            const postServiceStub = sinon
                .stub(mockPostService, 'getPostById')
                .returns(mockPost);

            const actual = postController.getPostById(1);

            expect(JSON.stringify(actual)).toBe(
                JSON.stringify({
                    userId: 1,
                    id: 1,
                    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
                })
            );

            postServiceStub.restore();
        });
    });
});
