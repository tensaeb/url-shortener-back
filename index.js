require("./db");
require("dotenv").config();
const express = require("express");
const urlRouter = require("./routes/UrlRoutes");
const app = express();

app.use(express.json());
app.use("/api/urls", urlRouter);

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log("====================================");
  console.log(`App Working on port: ${port}`);
  console.log("====================================");
});

module.exports = app;
