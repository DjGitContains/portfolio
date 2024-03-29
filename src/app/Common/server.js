//Need to ruun it as separate server and implement send email using backedn server like below

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: constant.smtpUserName,
    pass: 'your_password'
  }
});

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});