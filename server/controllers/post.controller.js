import User from '../models/user.model.js';
import Post from '../models/post.model.js';

// create post
export const createPost = async (req, res) => {
    try {
        const userId = req.query.userId;
        
        const user = await User.findById({ _id: userId });

        if(user) {
            const post = await Post.create({ userId, post: req.body.post });
            res.status(200).json(post);
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// get all posts
export const getAllPosts = async (req, res) => {
    try {
        const userId = req.query.userId;
        
        const user = await User.findById({ _id: userId });

        if(user) {
            const post = await Post.find({ userId: userId });
            res.status(200).json(post);
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// update post
export const updatePost = async (req, res) => {
    try {
        const postId = req.query.postId;

        const updatedPost = await Post.findByIdAndUpdate(postId, {
            $set: {
                post: req.body.post
            }
        });

        if (!updatedPost) {
            res.status(404).json({ message: 'Post not found' });
        } else {
            res.status(200).json({ message: 'Post updated successfully' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// delte post
export const deletePost = async (req, res) => {
    try {
        const postId = req.query.postId;

        const deletedPost = await Post.findByIdAndRemove(postId);

        if (!deletedPost) {
            res.status(404).json({ message: 'Post not found' });
        } else {
            res.status(200).json({ message: 'Post deleted successfully' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}