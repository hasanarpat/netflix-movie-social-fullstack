import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const episodesSchema = new Schema(
  {
    episodes: [{ id: String, title: String, body: String, url: String }],
  },
  { timestamps: true }
);

export const Episodes = models.Episodes || model('Episodes', episodesSchema);
