const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Demo! to Hello from Cloud Paks 27 Nov Wipro !!!")
});
 
module.exports.app = app;
