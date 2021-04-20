const User = require('../models/userModel');
require('dotenv').config();
const userController = {};
 //envoyer un message
 userController.message = async (req, res) => {
    const { prenom, nom, email, phone, message, joined } = req.body;

    const newUser = new User({
        prenom,
        nom,
        email,
        phone,
        message,
        joined
    });


     newUser.save((err, newUser)=>{
         if(err){
             return res.status(400).send(err)
         }
        res.send(newUser)

     })

},

//recuperation les messages

userController.getUserInfo= async (req, res) => {
  try {
      const user = await User.find()

      res.json(user)
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}
module.exports = userController;



