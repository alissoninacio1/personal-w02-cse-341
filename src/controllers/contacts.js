const connectToMongo = require("../database/mongo");

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
  return queryCollection(async (collection) => {
    return await collection.findOne({ _id: id });
  });
}

module.exports = {
  getContacts,
  getContactById,
};




