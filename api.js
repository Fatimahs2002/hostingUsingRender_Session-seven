// const express = require('express')
// const app = express()
// var cors = require('cors')
// app.use(cors())
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000);
const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors())
app.get('/students', function (req, res) {
  data=[{id:150,name:'ali'},{id:15,name:'hassam'}]
    res.send(data);
  })
  app.get('/', function (req, res) {
    res.send('Hello World')
  })

const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});