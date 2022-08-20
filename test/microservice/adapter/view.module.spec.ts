import { Test, TestingModule } from '@nestjs/testing';
import { ViewModule } from '../../../src/microservice/adapter/view.module';
import { ViewController } from '../../../src/microservice/adapter/controller/view.controller';

describe('ViewController', () => {
    let viewController: ViewController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [ViewModule],
            controllers: [],
            providers: []
        }).compile();

        viewController = app.get<ViewController>(ViewController);
    });

    describe('getPostDetails', () => {
        it('Should call getPostDetails and return the correct post for position 1', () => {
            const actual = viewController.getPostDetails(1);
            expect(JSON.stringify(actual)).toBe(
                JSON.stringify({
                    userId: 1,
                    id: 1,
                    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
                })
            );
        });
    });
});
