const {_getUserData} = require('../models/users.models.js')

const renderProfile = async (req,res) => {
    const user_id = Number(req.params.userId);
    const userData = await _getUserData(user_id);
    const dataProfile = userData[0];
    res.render('profile', {dataProfile});
};

module.exports = renderProfile;