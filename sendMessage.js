var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'khadija.zerzkhane98@gmail.com',
    pass: ';;;;'
  }
});

var mailOptions = {
  from: 'khadija.zerzkhane98@gmail.com',
  to: 'khadija.zerzkhane98@gmail.com',
  subject: 'test send message',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});