const express = require('express')
const app = express()

app.use(express.static('public'))
app.get('/', function (req, res) {
  res.render('index')
})

app.listen(process.env.PORT || 2000, function () {
  console.log('server started on port ' + (process.env.PORT || 2000))
})
