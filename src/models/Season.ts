import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const seasonSchema = new Schema(
  {
    address: String,
   episodes:[String],
   id:Number
  },
  { timestamps: true }
);

export const Season = models.Season || model('Season', seasonSchema);
