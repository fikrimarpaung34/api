import mongoose from "mongoose";
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    userId: {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    cat: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    isSold: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", PostSchema);
