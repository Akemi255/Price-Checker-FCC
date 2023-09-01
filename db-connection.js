const mongoose = require("mongoose");
const db = mongoose.connect("mongodb+srv://gus:1234@cluster0.opvwf1j.mongodb.net/fcc?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = db;
