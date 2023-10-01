
const express = require('express');
const router = express.Router();
const { 
  handleGetContacts, 
  handleGetContactById, 
  handleCreateContact,
  handleUpdateContact,
  handleDeleteContact
} = require("../controllers/handleContacts");


router.get("/contacts", handleGetContacts);

router.get("/:id", handleGetContactById);

router.post("/contacts", handleCreateContact);

router.put("/contacts/:id", handleUpdateContact);

router.delete("/contacts/:id", handleDeleteContact);

module.exports = router;