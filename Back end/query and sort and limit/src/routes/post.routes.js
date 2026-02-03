const express =require('express')
const postController = require("../controllers/post.controllers")
const router =express.Router()

router.get('/:id',postController.getAllPosts)
// router.get('/:id',postController.getPost)

module.exports=router