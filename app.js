const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Welcome to IBM Cloud Paks Verify!");
});
 
module.exports.app = app;
