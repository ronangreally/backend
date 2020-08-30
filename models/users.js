const mongoose = require('mongoose');
var schema = new mongoose.Schema(
    { name: { type: String, required: true, unique: true }, 
      age: { type: String, required: true }
    });
var Users = mongoose.model('Users', schema);

module.exports = Users;