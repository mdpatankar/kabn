const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Demo! to Hello from Cloud Paks - Capgemini demo 19Nov !!!")
});
 
module.exports.app = app;
