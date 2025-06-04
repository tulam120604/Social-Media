import mongoose from "mongoose";

const schema_like = new mongoose.Schema({
  id_account: {
    type: mongoose.Types.ObjectId,
    ref: "account",
  },
  like: {
    type: String,
    default: "like",
  },
  id_post: {
    type: mongoose.Types.ObjectId,
    ref: "post",
  },
});

export default mongoose.model("like", schema_like);
