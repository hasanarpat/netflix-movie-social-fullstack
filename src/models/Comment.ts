import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const commentSchema = new Schema(
  {
    address:String,
    author: String,
    body: String,
    comments: [{ id: String }],
    meta: {
      likes: Number,
      dislikes: Number,
    },
  },
  { timestamps: true }
);

export const Comment = models.Comment || model('Comment', commentSchema);
