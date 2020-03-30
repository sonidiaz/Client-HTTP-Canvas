const express = require("express");
const app = express();
const axios = require("axios");
const parser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3009;
const { tokens, User, Courses } = require("./src/endpoints");

app.use(cors());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

const tokenHandlers = tokens({ axios });
const userHandlers = User({ axios });
const coursesHandlers = Courses({ axios });

app.get("/?", (req, res) => {
  if (req.query.code) {
    res.send(req.query.code);
  }
  if (req.query.error) {
    res.send(req.query.error);
  }
});

app.options("/api/login/oauth2/", cors());
app.options("/api/user/profile/", cors());

app.post("/api/user/profile/", userHandlers.getProfile);
app.post("/api/user/course/", coursesHandlers.get);
app.post("/api/login/oauth2/token/", tokenHandlers.auth);
app.post("/api/login/oauth2/refresh_token/", tokenHandlers.refresh);

app.listen(port);
