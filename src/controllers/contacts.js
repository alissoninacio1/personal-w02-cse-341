const connectToMongo = require("../database/mongo");

async function getContacts() {
  const { client, contactsCollection } = await connectToMongo();

  try {
    const contacts = await contactsCollection.find({}).toArray();
    return contacts;
  } catch (err) {
    console.error("Error:", err);
  } finally {
    client.close();
    console.log("Disconnected from MongoDB");
  }
}

module.exports = {
  getContacts
};