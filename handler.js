const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.use(express.json());
const userController = require('./apis/controllers/user-controller')

app.use('/users',userController);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);