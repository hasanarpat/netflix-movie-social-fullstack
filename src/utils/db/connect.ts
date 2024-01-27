import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { connect, connection } = mongoose;

let isConnected: boolean;

export const connectToDb = async () => {
  try {
    if (isConnected === undefined) {
      await connect(process.env.MONGO);
      isConnected = true;
      console.log('Successfully connected to database.');
    } else {
      console.log('Already connected to database.');
    }
  } catch (error) {
    console.error('Could not connect to the database:', error);
    throw new Error('Database connection could not be established!');
  }
};

export const closeDbConnection = async () => {
  if (isConnected) {
    await connection.close();
    isConnected = false;
    console.log('Database connection closed.');
  } else {
    console.log('No database connection to close.');
  }
};
