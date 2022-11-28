const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//comments Routes - simplified for now
//:id creates a variable for id

router.post("/createComment/:id", upload.single("file"), postsController.createPost);

module.exports = router;