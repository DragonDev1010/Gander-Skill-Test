const express = require('express')
const app = express()
var cors = require("cors");
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());
app.use(cors());
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addNum', (req, res) => {
    res.json(req.body.firstNum + req.body.secNum)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})