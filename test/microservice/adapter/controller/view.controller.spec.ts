import { Test, TestingModule } from '@nestjs/testing';
import { PostRepository } from '../../../../src/microservice/adapter/repository/post.repository';
import { PostService } from '../../../../src/microservice/domain/service/post.service';
import * as sinon from 'sinon';
import { ViewController } from '../../../../src/microservice/adapter/controller/view.controller';

describe('ViewController', () => {
    let viewController: ViewController;

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

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ViewController],
            providers: [
                {
                    provide: PostService,
                    useValue: mockPostService
                },
                PostRepository
            ]
        }).compile();

        viewController = app.get<ViewController>(ViewController);
    });

    describe('root', () => {
        it('Should call root', () => {
            const actual = viewController.root();
            expect(JSON.stringify(actual)).toBe(JSON.stringify({}));
        });
    });

    describe('getPostDetails', () => {
        it('Should call getPostDetails and return the correct post for position 1', () => {
            const postServiceStub = sinon
                .stub(mockPostService, 'getPostById')
                .returns(mockPost);

            const actual = viewController.getPostDetails(1);

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
