const express = require('express');
const router = express.Router();
const { connectToDB } = require('../database/mongoConnect'); 

router.get('/', async (req, res) => {
  try {
    const db = await connectToDB();
    const contacts = await db.collection('contacts').find({}).toArray();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
    const contactId = req.params.id;
  
    try {
      const db = await connectToDB();
      const contact = await db.collection('contacts').findOne({ _id: contactId });
  
      if (!contact) {
        res.status(404).json({ error: 'Contact not found' });
      } else {
        res.status(200).json(contact);
      }
    } catch (error) {
      console.error('Error retrieving contact:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;