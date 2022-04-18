const mongoose = require('mongoose');


const keeperSchema = new mongoose.Schema({
  title: String,
  description: String,
});





// now we need to create collection

const keeper = new mongoose.model('keeper', keeperSchema); //Register used database collection name and add keeper scheme which we publish on front page

// now export  then pass collection wala Register

module.exports = keeper;
