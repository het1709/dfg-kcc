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

const sendEmail = async (req, res, next) => {
  const {
    user_email
  } = req.body;
  console.log(user_email);

  let mailOptions = {
    to: user_email,
    subject: EMAIL_SUBJECT,
    text: EMAIL_BODY
  };
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