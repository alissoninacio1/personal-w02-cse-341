const express = require('express');
const app = express();
const port = 8080;

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); 

const contactsRouter = require('./routes/index');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use('/', contactsRouter);
app.use('/contacts', contactsRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`);
});
