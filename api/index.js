// All required import
require("./config.js");
const app = require("./config.js");
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.js");
// All Middleware
app.use(express.json());
app.use(cors());

// Upload file

// All Routes
app.use("/api/users", userRoute);
