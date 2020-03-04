const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Kabanero Microservice with Kabanero - MS Demo !!!")
});
 
module.exports.app = app;
