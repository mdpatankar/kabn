const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Barclays Microservice!!!")
});
 
module.exports.app = app;
