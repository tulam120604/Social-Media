import mongoose from "mongoose";

const schema_like = new mongoose.Schema({
  id_account: {
    type: mongoose.Types.ObjectId,
    ref: "account",
  },
  like: {
    type: Boolean,
    default: false,
  },
  id_post: {
    type: mongoose.Types.ObjectId,
    ref: "post",
  },
});

export default mongoose.model("like", schema_like);
