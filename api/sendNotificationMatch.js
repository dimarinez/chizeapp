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
  production: true, // Change to true for production environment
});

module.exports = async (req, res) => {
  const user1DeviceToken = req.body.record.user1_deviceToken;
  const user2DeviceToken = req.body.record.user2_deviceToken;
  const deviceTokens = [user1DeviceToken, user2DeviceToken];

  if (!deviceTokens) {
    return res.status(400).json({ error: 'Device token is required' });
  }

  const notification = new apn.Notification();
  notification.payload = {
    screen: 'Matches',
  };
  notification.topic = 'org.reactjs.native.example.Chize';
  notification.title = 'Chize';
  notification.body = 'Someone matched with you!';
  notification.sound = 'default';

  try {
    const result = await apnProvider.send(notification, deviceTokens);
    console.log('Notification sent:', result);
    console.log(result.failed[0].response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ error: 'Error sending notification' });
  }
};
