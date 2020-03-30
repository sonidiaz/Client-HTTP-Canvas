const {BFG_CANVAS_TEST} = require('../../../../key.js');
const URL = userId => `${BFG_CANVAS_TEST}/api/v1/users/${userId}/courses`;

const Courses = ({ axios }) => ({
  get: async (req, res) => {
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

module.exports = Courses;
