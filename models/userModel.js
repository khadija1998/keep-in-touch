const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    

    
    
        prenom: {
            
            type: String,
            require: true
        },
        nom: {
            
            type: String,
            require: true
        },

        email: {
            
            type: String,
            require: true
        },

        phone: {
            
            type: String,
            require: true
        },


        message: {
            
            type: String,
            require: true
        },

        joined: {
            type: Date, default: new Date()
        
        },




});


 const User= mongoose.model('User',UserSchema );
  
 module.exports =User;
