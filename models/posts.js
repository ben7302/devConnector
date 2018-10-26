const mongoose = require("mongoose");
const Schema = mongoose.Schema;
PostsSchema = new mongoose.Schema({
  users: {
    type: Schema.types.objectId,
    ref: "users"
  },
  text: { type: String, required: true },
  name: { type: String },
  avatar: { type: String },
  likes: [
    {
      users: {
        type: Schema.type.objectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.types.ObjectId,
        ref: "users"
      },

      text: { type: String },
      name: { type: String },
      avatar: { type: String },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Post = mongoose.post("post", PostSchema);
