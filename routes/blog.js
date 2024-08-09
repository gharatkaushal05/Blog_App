const express = require("express")
const router = express.Router()

// import controllers

const { dummyLink, likePost, unlikePost } = require("../controllers/likeController")
const {createComment} = require("../controllers/commentController")
const {createPost, getAllPosts} = require("../controllers/PostController")

router.get("/dummyroute",dummyLink)
router.post("/comments/create",createComment)
router.post("/posts/create",createPost)
router.get("/posts/getall", getAllPosts)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)


//mapping create



// export
module.exports = router;