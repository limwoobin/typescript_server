import Post from '../../models/post';
import { PostTypeCode } from '../../core/code/PostTypeCode';
import { Document , Model } from 'mongoose';
import IPost from '../../models/interface/IPost';
import { PostModel } from '../../core/model/PostModel';

export default class PostRepository {

    constructor(private postModel : Model <IPost & Document>) {
        this.postModel = Post;
    }

    async getPosts(postType: PostTypeCode) : Promise<PostModel[]>{
        return await this.postModel.find({postType: postType});
    }

    async getPost(_id: string) : Promise<PostModel> {
        const postData : PostModel | any = await this.postModel.findOne({_id: _id});
        postData.views++;
        postData.save();
        return postData;
    }

    async getRecentPost() : Promise<PostModel[]>{
        return await this.postModel.find()
                                   .sort('-createdAt')
                                   .limit(5)
                                   .select('_id title');
    }

    async save(postData: PostModel) : Promise<void> {
        let post = new Post();
        post.userEmail = postData.userEmail;
        post.postType = postData.postType;
        post.title = postData.title;
        post.content = postData.content;
        await post.save();
    }
}