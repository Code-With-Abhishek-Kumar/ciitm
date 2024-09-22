import mongoose from 'mongoose';

// Define an asynchronous function to handle database connection
const connectToDatabase = async () => {
  try {
    // Use the connection string from environment variables or default to local MongoDB instance
    const connectionString =
      process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/test';

    mongoose
      .connect('mongodb://127.0.0.1:27017/test')
      .then(() => console.log('Connected!'));

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // Optionally, handle the error by exiting the process or taking other actions
  }
};

// Export the connection function
export default connectToDatabase;
