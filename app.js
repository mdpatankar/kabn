const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Barclays!!!")
});
 
module.exports.app = app;
