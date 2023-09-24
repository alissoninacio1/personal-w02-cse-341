const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/contacts', contactsController.getContacts);

module.exports = router;