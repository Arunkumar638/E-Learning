const nodemailer = require("nodemailer");
require("dotenv").config();
const adminMail = `support@spiegeltechnologies.com`;


const subscriptionEmail = async (option) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

    const emailOptions = {
      from: `Spiegel_support <${adminMail}>`,
      to: option.email,
      subject: option.subject,
      text: option.message,
      html: `<div>Dear&nbsp;${option.name},<br/><p>You're now successfully subscribed to our e-learning platform, 
      we hope you enjoy our services and we wish you &nbsp;<b>All the best to your carrer</b> </p></div>`,
    };
    await transporter.sendMail(emailOptions);

};


module.exports = subscriptionEmail;