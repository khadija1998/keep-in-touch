const mongoose = require('mongoose');
const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
const dt = `${d.getFullYear()}-${month}-${d.getDate()}`;
const UserSchema = new mongoose.Schema({
    

    
    
       nom: {
    type: String,
    required: true,
    min: 3,
    max: 48,
    trim: true,
  },
  prenom: {
    type: String,
    required: true,
    min: 3,
    max: 48,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    min: 10,
    max: 1024,
    trim: true,
  },
  date: {
    type: String,
    default: dt,
  },



});


 const User= mongoose.model('User',UserSchema );
  
 module.exports =User;
