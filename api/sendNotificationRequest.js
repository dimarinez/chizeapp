const apn = require('apn');
const path = require('path');

// Get the APNS authentication key path from the environment variable
const apnsAuthKeyPath = path.join(__dirname, 'keys', 'apns.p8');

const apnProvider = new apn.Provider({
  token: {
    key: apnsAuthKeyPath, // Replace with your APNs Authentication Key path
    keyId: 'ZURVGBDD3L', // Replace with your Key ID
    teamId: '98WJP6S25J', // Replace with your Team ID
  },
  production: false, // Change to true for production environment
});

module.exports = async (req, res) => {
  const deviceToken = req.body.record.receiver_deviceToken;

  console.log(deviceToken);

  if (!deviceToken) {
    return res.status(400).json({ error: 'Device token is required' });
  }

  const notification = new apn.Notification();
  notification.topic = 'org.reactjs.native.example.CoffeeMeet';
  notification.title = 'Sample Title';
  notification.subtitle = 'Sample Subtitle';
  notification.body = 'Sample body of the notification';
  notification.sound = 'default';

  try {
    const result = await apnProvider.send(notification, deviceToken);
    console.log('Notification sent:', result);
    console.log(result.failed[0].response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ error: 'Error sending notification' });
  }
};
