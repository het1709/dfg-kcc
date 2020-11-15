import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

const { EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_TO, EMAIL_SUBJECT, EMAIL_BODY } = process.env;

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USERNAME,
    pass: EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

let mailOptions = {
  to: EMAIL_TO,
  subject: EMAIL_SUBJECT,
  text: EMAIL_BODY
};

const sendEmail = async (req, res, next) => {
  console.log(`sendEmail is called`);
  try {
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        return res.status(500).send('Operation is not successful');
      }
      return res.status(200).send('Email Sent successfully');
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Operation was not successful');
  }
};

export {
  sendEmail
};