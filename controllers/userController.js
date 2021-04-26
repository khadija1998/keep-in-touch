const User = require('../models/userModel');
require('dotenv').config();
const moment = require('moment');
const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');
const userController = {};
 //envoyer un message
 userController.message = async (req, res) => {
    const { prenom, nom, email, phone, message, date } = req.body;

    const newUser = new User({
        prenom,
        nom,
        email,
        phone,
        message,
        date
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
/////////reply
const transporter = nodemailer.createTransport(
    smtpTransport({
      host: 'smtp.gmail.com',
      auth: {
        type: 'custom',
        user: 'khadija.zerzkhane98@gmail.com',
        pass: 'khadija2017',
      },
    })
  );
userController.replyContact = async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    try {
      const currentClient = await Client.findOne({ _id: id });
      if (currentClient) {
        const mailOptions = {
          from: 'khadija.zerzkhane98@gmail.com',
          to: currentClient.email,
          subject: 'Mail',
          text: message,
        };
        const envoiMail = await transporter.sendMail(mailOptions);
        if (envoiMail) res.status(200).json('Mail sent');
      }
    } catch (error) {
      throw Error(error) 
    }
};
///search
userController.findContact = async (req, res) => {
  const { date } = req.body;
  const { email } = req.body;
  // console.log(date);
  // console.log(new Date(date));
  try {
    if (date && email) {
      const result = await User.find({ email, date });
      if (result) return res.status(200).json(result);
    } else if (date && !email) {
      const result = await User.find({ date });
      if (result) return res.status(200).json(result);
    } else if (!date && email) {
      const result = await User.find({ email });
      if (result) return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
///////
userController.singleContact = async (req, res) => {
    const { id } = req.params;
    try {
        const currentContact = await User.findOne({ _id: id });
        if (currentContact) return res.status(200).json(currentContact);
    } catch (error) {
        return res.status(500).json(error);
    }
}
module.exports = userController;



