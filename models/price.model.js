const mongoose = require("mongoose");

const Price = mongoose.model(
  "Price",
  new mongoose.Schema({
    week: Number,
    weekend: Number,
    holidays: Number,
  })
);

module.exports = Price;