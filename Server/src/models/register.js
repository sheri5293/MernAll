const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Signupscheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  confirmpassword: {
    type: String,
    required: true,
  },
Date:{ type: Date, default: Date.now },
messages:[
  {
    title: {
      type: String,
      required: true,
  },
  description:{
    type: String,
    required: true,
  }
}
],

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});





//We are hashing passsword//

Signupscheme.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10);
  }
  next();
});

//we are generatin token //  in which signup is instance and .method inside .generateAuthToken//
Signupscheme.methods.generateAuthToken = async function () {
  try {
    let tokenuser = jwt.sign({ _id: this._id }, process.env.JWT_SECRET); // _id must be equal to user._id//
    this.tokens = this.tokens.concat({ token: tokenuser });
    await this.save();
    return tokenuser;
  } catch (e) {
    console.log(err);
  }
};

//!Store the message in database//

Signupscheme.methods.addMessage = async function (title, description) {
  try {
   this.messages= this.messages.concat({title, description});
    await this.save();
    return this.messages;
  
  }catch(err){
    console.log(err);
  }
};


// now we need to create collection

const Register = new mongoose.model('Register', Signupscheme); //Register used database collection name and add empolyee scheme which we publish on front page

// now export  then pass collection wala Register

module.exports = Register;
