import mongoose from "mongoose";

const schema_post = new mongoose.Schema({
  id_account: {
    type: mongoose.Types.ObjectId,
    ref: "account",
  },
  content: String,
  media_urls: String,
  visibility: {
    type: String,
    enum: ["public", "private", "friends"],
    default: "friends",
  },
  interact: {
    type: mongoose.Types.ObjectId,
    ref: "interact",
  },
  comment: {
    type: mongoose.Types.ObjectId,
    ref: "comment",
  },
});

export default mongoose.model("post", schema_post);
