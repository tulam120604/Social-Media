import mongoose from "mongoose";

const schema_friendList = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "account",
    },
    friendId: {
      type: mongoose.Types.ObjectId,
      ref: "account",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("friendList", schema_friendList);
