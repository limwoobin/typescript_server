import Post from '../../models/post';
import { PostTypeCode } from '../../core/code/PostTypeCode';
import { PostModel } from '../../core/model/PostModel';

export default class PostService {
    async getPosts(postType: PostTypeCode) {
        return await Post.find({postType: postType});
    }

    async getPost(_id: string) {
        const postData: PostModel | any = await Post.findOne({_id: _id});
        postData.views++;
        postData.save();
        return postData;
    }

    async getRecentPosts() {
        return await Post.find()
                         .sort('-createdAt')
                         .limit(5)
                         .select('_id title');
    }

    async writePost(postData: PostModel) {
        let post = new Post();
        post.userEmail = postData.userEmail;
        post.postType = postData.postType;
        post.title = postData.title;
        post.content = postData.content;
        return await post.save();
    }
}