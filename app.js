const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Kabanero Microservice HCL Demo with Kabanero Today 28 Feb !!!")
});
 
module.exports.app = app;
