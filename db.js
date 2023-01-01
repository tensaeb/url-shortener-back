require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGO_URI;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("====================================");
    console.log("Connected to the database");
    console.log("====================================");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
