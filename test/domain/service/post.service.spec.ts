import { Test, TestingModule } from '@nestjs/testing';
import { PostRepository } from '../../../src/adapter/repository/post.repository';
import { PostService } from '../../../src/domain/service/post.service';
import * as sinon from 'sinon';

describe('PostService', () => {
    let postService: PostService;

    const mockPostRepository = {
        getPosts: () => {
            return;
        }
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
            controllers: [PostService],
            providers: [
                {
                    provide: PostRepository,
                    useValue: mockPostRepository
                }
            ]
        }).compile();

        postService = app.get<PostService>(PostService);
    });

    describe('getPostById', () => {
        it('Should call getPostById and return the correct post for position 1', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns(mockPosts);

            const actual = postService.getPostById(1);

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

        it('Should call getPostById and return the correct post for position 2', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns(mockPosts);

            const actual = postService.getPostById(2);

            expect(JSON.stringify(actual)).toBe(
                JSON.stringify({
                    userId: 1,
                    id: 2,
                    title: 'qui est esse',
                    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
                })
            );

            postServiceStub.restore();
        });

        it('Should call getPostById and return an error for empty array', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns(mockPosts);

            try {
                postService.getPostById(3);
            } catch (err) {
                expect(err.message).toBe('Post 3 not found!');
            }

            postServiceStub.restore();
        });

        it('Should call getPostById and return an error for undefined title prop', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns([
                    {
                        userId: 1,
                        id: 1,
                        title: undefined,
                        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
                    }
                ]);

            try {
                postService.getPostById(1);
            } catch (err) {
                expect(err.message).toBe('Undefined title for requested Post');
            }

            postServiceStub.restore();
        });

        it('Should call getPostById and return an error for null title prop', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns([
                    {
                        userId: 1,
                        id: 1,
                        title: null,
                        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
                    }
                ]);

            try {
                postService.getPostById(1);
            } catch (err) {
                expect(err.message).toBe('Empty title for requested Post');
            }

            postServiceStub.restore();
        });

        it('Should call getPostById and return an error for empty title prop', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns([
                    {
                        userId: 1,
                        id: 1,
                        title: '',
                        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
                    }
                ]);

            try {
                postService.getPostById(1);
            } catch (err) {
                expect(err.message).toBe('Empty title for requested Post');
            }

            postServiceStub.restore();
        });

        it('Should call getPostById and return an error for absent title prop', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns([
                    {
                        userId: 1,
                        id: 1,
                        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
                    }
                ]);

            try {
                postService.getPostById(1);
            } catch (err) {
                expect(err.message).toBe(
                    `The requested Post doesn't have the title property`
                );
            }

            postServiceStub.restore();
        });

        it('Should call getPostById and return an error for undefined body prop', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns([
                    {
                        userId: 1,
                        id: 1,
                        title: 'test',
                        body: undefined
                    }
                ]);

            try {
                postService.getPostById(1);
            } catch (err) {
                expect(err.message).toBe('Undefined body for requested Post');
            }

            postServiceStub.restore();
        });

        it('Should call getPostById and return an error for null body prop', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns([
                    {
                        userId: 1,
                        id: 1,
                        title: 'test',
                        body: null
                    }
                ]);

            try {
                postService.getPostById(1);
            } catch (err) {
                expect(err.message).toBe('Empty body for requested Post');
            }

            postServiceStub.restore();
        });

        it('Should call getPostById and return an error for empty body prop', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns([
                    {
                        userId: 1,
                        id: 1,
                        title: 'test',
                        body: ''
                    }
                ]);

            try {
                postService.getPostById(1);
            } catch (err) {
                expect(err.message).toBe('Empty body for requested Post');
            }

            postServiceStub.restore();
        });

        it('Should call getPostById and return an error for absent body prop', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns([
                    {
                        userId: 1,
                        id: 1,
                        title: 'test'
                    }
                ]);

            try {
                postService.getPostById(1);
            } catch (err) {
                expect(err.message).toBe(
                    `The requested Post doesn't have the body property`
                );
            }

            postServiceStub.restore();
        });
    });

    describe('getPosts', () => {
        it('Should call getPosts and return the correct array of posts', () => {
            const postServiceStub = sinon
                .stub(mockPostRepository, 'getPosts')
                .returns(mockPosts);

            const actual = postService.getPosts();

            expect(JSON.stringify(actual)).toBe(JSON.stringify(mockPosts));

            postServiceStub.restore();
        });
    });
});
