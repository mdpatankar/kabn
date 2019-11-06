const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Welcome to IBM Cloud Paks!");
});
 
module.exports.app = app;
