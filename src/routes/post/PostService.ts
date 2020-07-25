import Post from '../../models/post';
import { PostTypeCode } from '../../core/code/PostTypeCode';
import { PostModel } from '../../core/model/PostModel';
import { Service , Inject } from 'typedi';
import PostRepository from './PostRepository';

@Service()
export default class PostService {
    constructor(
        private postRepository: PostRepository,
        @Inject('logger') private logger: any,
    ) {}

    async getPosts(postType: PostTypeCode) : Promise<PostModel[]> {
        return await this.postRepository.getPosts(postType);
    }

    async getPost(_id: string) : Promise<PostModel> {
        return this.postRepository.getPost(_id);
    }

    async getRecentPosts() : Promise<PostModel[]> {
        return await this.postRepository.getRecentPost();
    }

    async writePost(postData: PostModel) : Promise<void> {
        await this.postRepository.save(postData);
    }
}