const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "ptrash29@gmail.com",
      pass: "10dNnJE#DtIl",
    },
});

router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const mail = {
        from: name,
        to: 'ptrash29@gmail.com',
        subject: subject,
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Subject: ${subject}</p><p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: 'failed' });
        } else {
            res.json({status: 'sent' });
        }
    })
})

module.exports = router;
