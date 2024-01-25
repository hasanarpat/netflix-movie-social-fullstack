import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const seriesSchema = new Schema(
  {
    title: String,
    year: String,
    rated: String,
    released: String,
    runtime: String,
    genre: String,
    director: [String],
    writer: [String],
    actors: [String],
    plot: String,
    language: String,
    country: String,
    awards: String,
    poster: String,
    ratings: [{ source: String, value: String }],
    metaScore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbId: String,
    totalSeasons: Number,
    seasons: [String],
    comments: [String],
  },
  { timestamps: true }
);

export const Series = models.Series || model('Series', seriesSchema);
