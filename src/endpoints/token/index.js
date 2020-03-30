
const {CLIENT_ID, CLIENT_SECRET, BFG_CANVAS_TEST} = require('../../../../key.js');
const tokens = ({axios}) => ({
  auth: async(req, res) => {
      const body = {
        "grant_type": 'authorization_code',
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "redirect_uri": 'http://localhost:3000/profile',
        "code": req.body.data
      }
      const response = await axios.post(`${BFG_CANVAS_TEST}/login/oauth2/token`, body);
      res.send(response.data)
  },
  refresh: async(req, res) => {
      const body = {
        "grant_type": 'refresh_token',
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "refresh_token": req.body.data
      }
      const response = await axios.post(`${BFG_CANVAS_TEST}/login/oauth2/token`, body);
      res.send(response.data)
  }
});

module.exports = tokens;