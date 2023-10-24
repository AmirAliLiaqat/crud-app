import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    post: {
        type: String,
        required: true
    },
});

const Post = mongoose.model('post', postSchema);

export default Post;