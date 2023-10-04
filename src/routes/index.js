const express = require('express');
const router = new express.Router();
const {
  handleGetContacts,
  handleGetContactById,
  handleCreateContact,
  handleUpdateContact,
  handleDeleteContact,
} = require('../controllers/handleContacts');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger'); 
// Reference to your models.js file
/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       $ref: '../models/models.js'  
 */

// Route to display Swagger documentation
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get the list of contacts.
 *     responses:
 *       200:
 *         description: Success. Returns the list of contacts.
 */
router.get('/contacts', handleGetContacts);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get a contact by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Contact ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success. Returns the details of the contact with the specified ID.
 *       404:
 *         description: Contact not found.
 */
router.get('/:id', handleGetContactById);

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '../models/models.js'
 *     responses:
 *       201:
 *         description: Contact created successfully. Returns the ID of the new contact.
 *       500:
 *         description: Failed to create the contact.
 */
router.post('/contacts', handleCreateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Contact ID.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../models/models.js'
 *     responses:
 *       200:
 *         description: Contact updated successfully.
 *       404:
 *         description: Contact not found or not updated.
 *       500:
 *         description: Failed to update the contact.
 */
router.put('/contacts/:id', handleUpdateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Contact ID.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Contact deleted successfully.
 *       404:
 *         description: Contact not found or not deleted.
 *       500:
 *         description: Failed to delete the contact.
 */
router.delete('/contacts/:id', handleDeleteContact);

module.exports = router;
