const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Kabanero Microservice!!!")
});
 
module.exports.app = app;
