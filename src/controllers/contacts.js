const { ObjectId } = require('mongodb');
const connectToMongo = require("../database/mongo");

async function getContacts() {
  const { contactsCollection } = await connectToMongo();
  try {
    return await contactsCollection.find({}).toArray();
  } catch (err) {
    console.error("Error fetching contacts:", err);
    throw err;
  } finally {
    console.log("Disconnected from MongoDB");
  }
}


async function getContactById(id) {
  const { contactsCollection } = await connectToMongo();
  try {
    
    if (!ObjectId.isValid(id)) {
      return null; 
    }
    
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


async function createContact(contactData) {
  const { contactsCollection } = await connectToMongo();
  try {
    const result = await contactsCollection.insertOne(contactData);
    return result.insertedId;
  } catch (err) {
    console.error("Error creating contact:", err);
    throw err;
  } finally {
    console.log("Disconnected from MongoDB");
  }
}

async function updateContact(id, updatedContactData) {
  const { contactsCollection } = await connectToMongo();
  try {
    const objectId = new ObjectId(id);
    const result = await contactsCollection.updateOne(
      { _id: objectId },
      { $set: updatedContactData }
    );

    if (result.modifiedCount > 0) {
      return true; 
    } else {
      return false; 
    }
  } catch (err) {
    console.error("Error updating contact:", err);
    throw err;
  } finally {
    console.log("Disconnected from MongoDB");
  }
}



async function deleteContact(id) {
  const { contactsCollection } = await connectToMongo();
  try {
    const objectId = new ObjectId(id);
    const result = await contactsCollection.deleteOne({ _id: objectId });

    if (result.deletedCount > 0) {
      return true; 
    } else {
      return false; 
    }
  } catch (err) {
    console.error("Error deleting contact:", err);
    throw err;
  } finally {
    console.log("Disconnected from MongoDB");
  }
}


module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};



