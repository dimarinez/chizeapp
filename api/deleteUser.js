const { createClient } = require('@supabase/supabase-js');

// Get the APNS authentication key path from the environment variable
const supabase = createClient(REACT_NATIVE_SUPABASE_URL, REACT_NATIVE_SUPABASE_KEY);

module.exports = async (req, res) => {
    const user = req.body.user_id;
    if (user) {
        try {
            const { data, error } = await supabase.auth.admin.deleteUser(user);
            if (error) {
                console.error(error);
                res.status(500).json({ message: 'An error occurred while deleting the user.' });
            } else {
                res.status(200).json({ message: 'User deleted successfully.' });
            }
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'An error occurred while processing the request.' });
        }
    } else {
        res.status(400).json({ message: 'Invalid user ID provided.' });
    }
};
