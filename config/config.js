// mongoURI=mongodb://127.0.0.1:27017/FLUIDAI
// PORT=8080
// SECRET_CODE=fluidai


const mongoose = require("mongoose");

require("dotenv").config();

const mongoURI = process.env.mongoURI;

const connection = mongoose.connect(mongoURI);

// const connection = mongoose.createConnection(mongoURI)

module.exports = {
  connection,
};
