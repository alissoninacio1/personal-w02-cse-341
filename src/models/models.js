const contactModel = {
    type: 'object',
    properties: {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      email: { type: 'string' },
      favoriteColor: { type: 'string' },
      birthday: { type: 'string', format: 'date' },
    },
  };
  
  module.exports = contactModel;
  