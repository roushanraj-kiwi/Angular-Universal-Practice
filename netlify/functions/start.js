const serverless = require("serverless-http");
const {app} = require("./dist/angUni/server/main.js");

exports.handler = serverless(app())