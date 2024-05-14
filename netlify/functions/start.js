const serverless = require("serverless-http");
const {app} = require("./dist/angUni/server/main");

exports.handler = serverless(app())