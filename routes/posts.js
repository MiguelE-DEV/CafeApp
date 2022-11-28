const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
//:id creates a variable for id
router.get("/:id", ensureAuth, postsController.getPost);

//lets user create post w/ cloudinary for media upload
router.post("/createPost", postsController.createPost);

//lets usre to like post. In controller uses post to update likes by 1
router.put("/completePost/:id", postsController.completePost);

//enables user to delete post using post model
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
