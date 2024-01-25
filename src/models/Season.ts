import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const seasonSchema = new Schema(
  {
    episodes: [String],
    title: String,
    id: Number,
    year: String,
    released: String,
    writer: String,
    plot: String,
    poster: String,
    ratings: [String],
  },
  { timestamps: true }
);

export const Season = models.Season || model('Season', seasonSchema);
