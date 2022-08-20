import {
    BadRequestException,
    Injectable,
    NotFoundException
} from '@nestjs/common';
import { PostRepository } from '../../adapter/repository/post.repository';
import { PostEntity } from '../entity/post.entity';

@Injectable()
export class PostService {
    private validationFields = ['title', 'body'];

    constructor(private readonly postRepository: PostRepository) {}

    getPostById(id: number): PostEntity {
        const postById = this.postRepository.getPosts().filter((post) => {
            return post.id == id;
        });

        this.validateOutput(id, postById);

        return postById[0];
    }

    validateOutput(id: number, output: PostEntity[]) {
        if (output.length === 0) {
            throw new NotFoundException(`Post ${id} not found!`);
        }

        this.validationFields.forEach((field: string) => {
            this.validateField(field, output[0]);
        });
    }

    validateField(field: string, output) {
        if (!Object.keys(output).includes(field)) {
            throw new BadRequestException(
                `The requested Post doesn't have the ${field} property`
            );
        }

        if (typeof output[field] === 'undefined') {
            throw new BadRequestException(
                `Undefined ${field} for requested Post`
            );
        }

        if (output[field] == null || output[field].length === 0) {
            throw new BadRequestException(`Empty ${field} for requested Post`);
        }
    }
}
