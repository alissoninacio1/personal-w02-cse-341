// mongo db connection- https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database

const { MongoClient } = require("mongodb");
require('dotenv').config();

const dbName = process.env.DB_NAME;
const uri = process.env.MONGO_URI;

async function connectToMongo() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const contactsCollection = db.collection("contacts");

    return { client, contactsCollection };
  } catch (err) {
    console.error("Error:", err);
  }
}

module.exports = connectToMongo;

