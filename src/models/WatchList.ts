import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const watchlistSchema = new Schema(
  {
    userId: String,
    favorites: [String],
  },
  { timestamps: true }
);

export const WatchList =
  models.WatchList || model('WatchList', watchlistSchema);
