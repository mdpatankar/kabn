const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Kabanero Microservice HCL Demo!!!")
});
 
module.exports.app = app;
