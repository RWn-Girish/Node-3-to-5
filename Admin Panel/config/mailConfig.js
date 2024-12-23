const nodemailer = require("nodemailer");

const mailConfig =  async (msg) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: "rw3.girish.gk@gmail.com",
            pass: "jwrfchkkrsboelmf",
        },
    });

    await transporter.sendMail(msg)
    console.log("Mail Send Success");
}

module.exports = mailConfig;