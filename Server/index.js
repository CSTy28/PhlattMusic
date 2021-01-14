const sgMail = require("@sendgrid/mail");
const dotenv = require('dotenv');
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "tylerthegaynair@gmail.com",
  from: "CSTyy28@gmail.com",
  subject: "Sending with SendGrid is Fun",
  text: "this is the text",
  html: "<strong>this is the text</strong>"
};
/*sgMail.send(msg).then(() => {
  console.log('Message sent')
}).catch((error) => {
  console.log(error.response.body)
  // console.log(error.response.body.errors[0].message)
})*/


const path = require('path');
const express = require('express');
const transporter = require('./config');
//const dotenv = require('dotenv');
//dotenv.config();
const app = express();


const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  
  const msg = {
    to: req.body.email,
    from: "CSTyy28@gmail.com",
    subject: "Confirmation",
    text: req.body.message,
    html:`
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: "Confirmation"</li>
          <li>Message: ${req.body.message}</li>
        </ul>`
  };
  sgMail.send(msg).then(() => {
    console.log('Message sent')
  }).catch((error) => {
    console.log(error.response.body)
    // console.log(error.response.body.errors[0].message)
  })
  
});

/*app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: req.body.subject,
      html:`
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: ${req.body.subject}</li>
          <li>Message: ${req.body.message}</li>
        </ul>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }
});*/

app.listen(5000, () => {
  console.log('server start on port 5000');
});