const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'Documentation for the Contacts API',
    },
  },
  apis: ['./routes/index.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
