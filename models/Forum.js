const mongoose = require("mongoose");

const forumSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  isConfirmed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Forum", forumSchema);