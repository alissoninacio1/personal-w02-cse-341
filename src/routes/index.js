const express = require("express");
const router = express.Router();
const { getContacts } = require("../controllers/contacts"); 

router.get("/contacts", async (req, res) => {
  try {
    const contacts = await getContacts();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar contatos." });
  }
});

module.exports = router;