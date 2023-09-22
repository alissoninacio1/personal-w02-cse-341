const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/mongoConnect');
const routes = require('./routes');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', routes);

mongodb.initDb((err) => {
  if (err) {
    console.error(err);
    return;
  }
  
  app.listen(port, () => {
    console.log(`Connected to DB and listening on ${port}`);
  });
});
