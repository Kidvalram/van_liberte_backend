const mongoose = require("mongoose");

const Date = mongoose.model(
  "Date",
  new mongoose.Schema({
    date: String,
  })
);

module.exports = Date;