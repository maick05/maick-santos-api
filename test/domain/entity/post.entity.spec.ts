import { PostEntity } from '../../../src/domain/entity/post.entity';

describe('PostEntity', () => {
    it('Should instanciate PostEntity Correctly', () => {
        const post = new PostEntity();
        post.id = 1;
        post.userId = 2;
        post.title = 'any_title';
        post.body = 'any_body';

        expect(post.id).toBe(1);
        expect(post.userId).toBe(2);
        expect(post.title).toBe('any_title');
        expect(post.body).toBe('any_body');
    });
});
