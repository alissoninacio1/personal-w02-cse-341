const express = require('express');
const app = express();
const port = 8080;
const contactsRouter = require("./routes/index");

app.use(express.json());

app.use("/", contactsRouter);
app.use("/contacts", contactsRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`);
});
