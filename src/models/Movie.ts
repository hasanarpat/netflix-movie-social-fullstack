import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const movieSchema = new Schema(
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
    img: String,
    ratings: [{ source: String, value: String }],
    metaScore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbId: String,
    comments: [{ id: String }],
    images: [String],
  },
  { timestamps: true }
);

export const Movie = models.Movie || model('Movie', movieSchema);
