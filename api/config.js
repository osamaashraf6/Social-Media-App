// All required import
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// Config to connect to Database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));

// Config to connect to Server
app.listen(process.env.PORT, () => {
  console.log("Server is connected");
});
module.exports = app;
