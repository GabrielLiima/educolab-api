const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  hasConfirmed: {
    type: Boolean,
    default: false,
  },
  ForumID: {
    type: String,
    required: true,
  },
  codEnvioRecom: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Student", studentSchema);