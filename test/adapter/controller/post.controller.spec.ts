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
        },
        getPosts: () => {
            return;
        }
    };

    const mockPost = {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    };

    const mockPosts = [
        {
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
            userId: 1,
            id: 2,
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        }
    ];

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

    describe('getPosts', () => {
        it('Should call getPosts and return the correct post for position 1', () => {
            const postServiceStub = sinon
                .stub(mockPostService, 'getPosts')
                .returns(mockPosts);

            const actual = postController.getPosts();

            expect(JSON.stringify(actual)).toBe(JSON.stringify(mockPosts));

            postServiceStub.restore();
        });
    });
});
