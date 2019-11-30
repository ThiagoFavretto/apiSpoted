const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    location: String,
    description: String,
    image: String,
    user: String,
    likes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", PostSchema);
