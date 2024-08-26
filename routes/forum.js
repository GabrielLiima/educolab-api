const express = require("express");

const forumController = require("../controllers/forum");

const router = express.Router();

router.get("/eligible/:id", forumController.getEligible);
router.post("/register-forum", forumController.postRegisterForum);

module.exports = router;