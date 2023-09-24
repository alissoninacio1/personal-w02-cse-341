const express = require("express");
const router = express.Router();
const { getContacts, getContactById } = require("../controllers/contacts");


router.get("/contacts", async (req, res) => {
  try {
    const contacts = await getContacts();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Error fetching contact." });
  }
});


router.get("/contacts/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const contact = await getContactById(id);
  
      if (!contact) {
        res.status(404).json({ error: "Contact not found." });
        return;
      }
  
      res.json(contact);
    } catch (err) {
      res.status(500).json({ error: "Error fetching contact by ID." });
    }
  });

module.exports = router;