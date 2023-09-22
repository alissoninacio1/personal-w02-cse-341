const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

const connectToDB = async () => {
  try {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports = { connectToDB };
