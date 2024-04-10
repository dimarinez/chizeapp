const nodemailer = require('nodemailer');

// Your serverless function handler
module.exports = async (req, res) => {
  // Setup Nodemailer transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: process.env.EMAIL, // Your SMTP username
      pass: process.env.EMAIL_PASSWORD, // Your SMTP password
    },
  });

  const mailOptions = {
    from: process.env.FROM_EMAIL, // Sender address
    to: process.env.EMAIL, // Recipient address
    subject: 'Touchdown Travis Winner', // Subject line
    text: 'Touchdown Travis Winner', // Plain text body
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);

    // Return a successful response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully", info: info }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
