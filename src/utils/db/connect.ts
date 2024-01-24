import mongoose from 'mongoose';

const { connect } = mongoose;

export const connectToDb = async () => {
  try {
    await connect(process.env.MONGO as string);
    console.log('Successfully connected to database.');
  } catch (error) {
    console.log('Could not connected to database.');
    throw new Error('Database connection could not be established!');
  }
};
