const express = require("express");

const studentController = require("../controllers/student");

const router = express.Router();

router.post("/register-students", studentController.postRegisterStudents);

module.exports = router;