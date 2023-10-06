const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/index.js']; 

const doc = {
  info: {
    title: 'API Documentation',
    description: 'Documentation for your API',
  },
  // host: 'localhost:8080', 
  host: 'alisson-personal-w02-cse-341.onrender.com',
  basePath: '/',
};

swaggerAutogen(outputFile, endpointsFiles, doc);
