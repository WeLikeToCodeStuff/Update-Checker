const express = require('express');
const info = require('./info.json')

const app = express();

app.get('/', (req, res) => {
  res.json({"message": "Thank you for using the WLTCS update checking system! You can find more details about it at https://github.com/WeLikeToCodeStuff/Update-Checker"})
});
app.get('/version', (req, res) => {
  res.json({"Version": info.version})
})

app.listen(3000, () => {
  console.log('server started');
});
