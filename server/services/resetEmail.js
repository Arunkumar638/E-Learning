const nodemailer = require("nodemailer");
require("dotenv").config();
const adminMail = `<support@spiegeltechnologies.com>`;
const link = `localhost:3000/reset`;
const sendEmail = async (option) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });
  if (option.htmlmessage) {
    const emailOptions = {
      from: `Spiegel_support <${adminMail}>`,
      to: option.email,
      subject: option.subject,
      text: option.message,
      html: `<div>Hi&nbsp;${option.user},<br/><p>${option.htmlmessage}</p><a href="http://${link}?token=${option.token}">Reset Password</a></div>`,
    };
    await transporter.sendMail(emailOptions);
  } else {
    const emailOptions = {
      from: `${option.name}<${option.email}>`,
      to: adminMail,
      user: option.name,
      subject: option.subject,
      text: option.message,
    };
  }
  await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;
