const nodemailer = require("nodemailer");

const mailConfig =  async (msg) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD,
        },
    });

    console.log("Mail Send Success");
    return await transporter.sendMail(msg)
    
}

module.exports = mailConfig;