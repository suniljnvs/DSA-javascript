var nodemailer = require('nodemailer');

function sendEmail(email_to,email_subject,email_text){

      var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: "sunilk***********98@gmail.com",//jnvs
              pass: "sgaij********akyeh"
          },
          tls: {
              rejectUnauthorized: false
          }
      });

      var mailOptions = {
        from: "sunilk***********98@gmail.com",//jnvs
        to: email_to,
        subject: email_subject,
        text: email_text
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = {sendEmail};  // require on that page where you generate otp


const otp = Math.floor(Math.random() * 1000000); // generate 6 digit random otp


// otp schema in model
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  otp: {
    type: String,
    required: true
  },
  otpcount :{
    type : Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: {expires: 300}  // otp document deleted and expires automatic in (300 / 60 = 5 min)
  },
}, { timestamps: true });

module.exports = mongoose.model('Otp', otpSchema);




