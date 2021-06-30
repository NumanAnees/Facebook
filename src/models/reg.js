const mongoose = require("mongoose");

const data = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//-------------------------------------make collections---------------------------------
const Register = new mongoose.model("Register", data);

module.exports = Register;
