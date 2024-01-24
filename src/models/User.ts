import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const userSchema = new Schema(
  {
    name: String, // String is shorthand for {type: String}
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: String,
    age: Number,
    watchList: String,
  },
  { timestamps: true }
);

export const User = models.User || model('User', userSchema);
