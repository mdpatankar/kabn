const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Demo! to Hello from Cloud Paks Barclays!!!")
});
 
module.exports.app = app;
