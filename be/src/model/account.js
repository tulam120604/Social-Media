import mongoose from "mongoose";

const schema_account = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      maxlength: 25,
    },
    email: {
      type: String,
      required: true,
      maxlength: 25,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Account", schema_account);