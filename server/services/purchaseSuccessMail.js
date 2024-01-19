const nodemailer = require("nodemailer");
require("dotenv").config();
const adminMail = `support@spiegeltechnologies.com`;


const PurchaseSuccessEmail = async (option) => {
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
      html: option.htmlmessage
    };
    await transporter.sendMail(emailOptions);

};


module.exports = PurchaseSuccessEmail;