import mongoose from "mongoose";

export const schema_story = new mongoose.Schema(
  {
    id_account: {
      type: mongoose.Types.ObjectId,
      ref: "account",
    },
    text: {
      type: String,
      maxlength: 500,
    },
    media: String,
    status: {
      type: String,
      enum: ['public', 'friends', 'private'],
      default : 'public',
    },
    expiresAt: {
      type: Date,
      default: () => Date.now() + 24 * 60 * 60 * 1000,
      index: { expires: 0 },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default mongoose.model('story', schema_story)