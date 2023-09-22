const mongodb = require('../database/mongoConnect');
const { ObjectId } = require('mongodb');

const getAll = async (req, res, next) => {
  try {
    const db = mongodb.getDb().db();
    const contactsCollection = db.collection('contacts');
    const lists = await contactsCollection.find().toArray();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  } catch (error) {
    next(error);
  }
};

const getSingle = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const db = mongodb.getDb().db();
    const contactsCollection = db.collection('contacts');
    const lists = await contactsCollection.find({ _id: userId }).toArray();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getSingle };
