import mongoose from "mongoose";

const schema_interact = new mongoose.Schema({
  interact: {
    type: String,
    enum: ["like", "laugh", "sad", "wow", "wrath"],
    default: "like",
  },
  id_post: {
    type: mongoose.Types.ObjectId,
    ref: "post",
  },
  count_interact: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("interact", schema_interact);
