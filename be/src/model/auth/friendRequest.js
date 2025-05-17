import mongoose from "mongoose";

const schema_friendRequest = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Types.ObjectId,
      ref: "account",
    },
    receiverId: {
      type: mongoose.Types.ObjectId,
      ref: "account",
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("friendRequest", schema_friendRequest);
