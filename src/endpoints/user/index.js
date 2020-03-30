const {BFG_CANVAS_TEST} = require('../../../../key.js');
const URL = userId => `${BFG_CANVAS_TEST}/api/v1/users/${userId}/profile`;

const User = ({ axios }) => ({
  getProfile: async (req, res) => {
    const token = req.body.data.access_token;
    const userId = req.body.data.id;
    const headers = {
      Authorization: "Bearer " + token
    };
    console.log("headres", headers);
    const response = await axios.get(URL(userId), {
      headers
    });
    res.send(response.data);
  }
});

module.exports = User;
