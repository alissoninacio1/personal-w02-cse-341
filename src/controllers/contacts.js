const connectToMongo = require("../database/mongo");

const { ObjectId } = require('mongodb');

async function queryCollection(queryFunction) {
  const { contactsCollection } = await connectToMongo();


  try {
    return await queryFunction(contactsCollection);
  } catch (err) {
    console.error("Error:", err);
    throw err;
  } finally {
    console.log("Disconnected from MongoDB");
  }
}

async function getContacts() {
  return queryCollection(async (collection) => {
    return await collection.find({}).toArray();
  });
}


async function getContactById(id) {


  const { contactsCollection } = await connectToMongo();
  try {
    const objectId = new ObjectId(id);
    console.log("ID code:", objectId); 

    const contact = await contactsCollection.findOne({ _id: objectId });
    return contact;
  } catch (err) {
    console.error("Error fetching contact by ID:", err);
    throw err;
  } finally {
    console.log("Disconnected from MongoDB");
  }
}







module.exports = {
  getContacts,
  getContactById,
};




