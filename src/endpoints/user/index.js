const {CLIENT_CANVAS_TEST} = require('../../../credentials.js');
const URL = userId => `${CLIENT_CANVAS_TEST}/api/v1/users/${userId}/profile`;

const User = ({ axios }) => ({
  getProfile: async (req, res) => {
    const token = req.body.data.access_token;
    const userId = req.body.data.id;
    const headers = {
      Authorization: "Bearer " + token
    };
    const response = await axios.get(URL(userId), {
      headers
    });
    res.send(response.data);
  }
});

module.exports = User;
