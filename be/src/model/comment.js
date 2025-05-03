import mongoose from "mongoose";

const schema_comment = new mongoose.Schema({
  id_account: {
    type: mongoose.Types.ObjectId,
    ref: "account",
  },
  content: String,
});

export default mongoose.model("comment", schema_comment);
