const express = require("express");
const postsRouter = express.Router();
const {
  createPost,
  getAllPosts,
  getPostById,
  getPostByUser,
  updatePostById,
  SoftDeletePostById,
  hardDeletedPostById,
  getSavedPots,
  savePost,
  removeFromSaved
} = require("../controllers/posts");
const authentication = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

postsRouter.post('/' , authentication , createPost)
postsRouter.get('/' , authentication , getAllPosts)
postsRouter.get('/:post_id/post' , authentication , getPostById)
postsRouter.get('/:user_id/user' , authentication , getPostByUser)


postsRouter.get('/saved' , authentication , getSavedPots)
postsRouter.post('/add&save/:id' , authentication , savePost)

postsRouter.put('/:post_id' , authentication , updatePostById)
postsRouter.delete('/:post_id/soft' , authentication , SoftDeletePostById)
postsRouter.delete('/:post_id/hard' , authentication , hardDeletedPostById)

postsRouter.delete('/savedTr/:id' , authentication , removeFromSaved)

module.exports = postsRouter;


/* http://localhost:5000/posts
    Don't Forget the Token !!!!!!!!!!!
{
    "body":"test"
}
*/