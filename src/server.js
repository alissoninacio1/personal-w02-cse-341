
const express = require('express');
const app = express();
const port = 8080;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json'); 
const cors = require('cors');

app.use(cors());

const contactsRouter = require('./routes/index');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use('/', contactsRouter);
app.use('/contacts', contactsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
