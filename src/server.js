const express = require('express');
const app = express();
const port = 8080;

app.use("/", require("./routes/index"));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`);
});