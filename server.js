const express = require('express');
const app = express();
require('dotenv').config(); 
const port = process.env.PORT || 3000; // You can use any port number you prefer

// APNs configuration
const apn = require('apn');
const apnProvider = new apn.Provider({
  token: {
    key: process.env.APNS, // Replace with your APNs Authentication Key path
    keyId: 'ZURVGBDD3L', // Replace with your Key ID
    teamId: '98WJP6S25J', // Replace with your Team ID
  },
  production: true, // Change to true for production environment
});

app.use(express.json());

// Endpoint to send push notification
app.post('/sendNotificationRequest', (req, res) => {
    const deviceToken = req.body.record.receiver_deviceToken;

    if (!deviceToken) {
        return res.status(400).json({ error: 'Device token is required' });
    }

    const notification = new apn.Notification();
    notification.topic = 'org.reactjs.native.example.CoffeeMeet';
    notification.title = 'Sample Title';
    notification.subtitle = 'Sample Subtitle';
    notification.body = 'Sample body of the notification';
    notification.sound = 'default';
  
  // Send the notification
    apnProvider.send(notification, deviceToken)
    .then(result => {
        console.log('Notification sent:', result);
        res.status(200).json({ success: true });
    })
    .catch(error => {
        console.error('Error sending notification:', error);
        res.status(500).json({ error: 'Error sending notification' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
  