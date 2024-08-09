// import model
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")

// business logic

exports.createComment = async(req, res)=> {
    try {

        //fetch the data from body
        const  {post, user, body} = req.body
        // create a new comment object

        const comment = new Comment({
            post, user, body
        })

        // save the new comment in database
        const savedComment = await comment.save()
 

        // find the post by  ID and add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: _id}}, {new:true})
        // .populate("comments") // populate the comments array with comment documents
        // .exec();

        res.json({
            post: updatedPost
        })



    } catch (error) {
        return res.status(500).json({
            error: "Error While Creating Comment"
        })
        
    }
} 