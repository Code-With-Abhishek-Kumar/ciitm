import { createTransport } from '../utils/SendMail.js';

export let SendMail = async (req, res) => {
  try {
    let { subject, html, recipientEmail } = req.body;

    console.log(subject, html, recipientEmail);
    let MailSend_toUser = await createTransport().sendMail({
      from: process.env.GMAIL_User,
      to: recipientEmail,
      subject: subject,
      text: html,
      // html: "<b>Hello world?</b>",
    });

    if (!MailSend_toUser) {
      let error = new Error('Email not sent');
      error.status = 400;
      throw error;
    }

    console.log(MailSend_toUser);
    let SenderEmail = MailSend_toUser.envelope.from;
    res.status(200).json({
      message: `Email sent successfully from ${SenderEmail} to ${recipientEmail}.`,
      messageId: MailSend_toUser.messageId,
      timestamp: new Date().toISOString(), // Optional: Current timestamp
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error: true,
    });
  }
};

// default SendMail;
