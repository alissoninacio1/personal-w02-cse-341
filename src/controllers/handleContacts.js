const { 
    getContacts, 
    getContactById,
    createContact,
    updateContact,
    deleteContact
}  = require("./contacts");

//intermediate functions
async function handleGetContacts(req, res) {
    const contacts = await getContacts();
    res.json(contacts);
  }
  
async function handleGetContactById(req, res) {
    const { id } = req.params;
    console.log("ID received:", id);
    
    const contact = await getContactById(id);
  
    if (!contact) {
      res.status(404).json({ error: "Contact not found." });
      return;
    }
  
    res.json(contact);
}

async function handleCreateContact(req, res) {

    console.log("Received request body:", req.body);

    const contactData = req.body;
  
    const contact = {
      firstName: contactData.firstName,
      lastName: contactData.lastName,
      email: contactData.email,
      favoriteColor: contactData.favoriteColor,
      birthday: contactData.birthday
    };
  
    try {
      const newContactId = await createContact(contact);

      res.status(201).json({ id: newContactId });
    } catch (err) {
      console.error("Error creating contact:", err);
      res.status(500).json({ error: "Failed to create contact." });
    }
  }
  



  async function handleUpdateContact(req, res) {
    const { id } = req.params;
    const updatedContactData = req.body;
  
    try {
      const contactUpdated = await updateContact(id, updatedContactData);
  
      if (contactUpdated) {
        res.status(200).json({ message: "Contact updated successfully." });
      } else {
        res.status(404).json({ error: "Contact not found or not updated." });
      }
    } catch (err) {
      console.error("Error updating contact:", err);
      res.status(500).json({ error: "Failed to update contact." });
    }
  }

  
  async function handleDeleteContact(req, res) {
    const { id } = req.params;
  
    try {
      const contactDeleted = await deleteContact(id);
  
      if (contactDeleted) {
        res.status(200).json({ message: "Contact deleted successfully." });
      } else {
        res.status(404).json({ error: "Contact not found or not deleted." });
      }
    } catch (err) {
      console.error("Error deleting contact:", err);
      res.status(500).json({ error: "Failed to delete contact." });
    }
  }



module.exports = {
    handleGetContacts,
    handleGetContactById,
    handleCreateContact,
    handleUpdateContact,
    handleDeleteContact
}