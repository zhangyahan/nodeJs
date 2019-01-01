var express = require('express')
var bodyParser = require('body-parser')

var app = express()


app.get('/:name', function (req, res) {
    console.dir(req.query)  
    res.send('You requested to see a profile with the name of ' + req.query.name)
})

app.get('/profile/:id/user/:name', function (req, res) {
    console.dir(req.params)
    res.send('You requested to see a profile with the name of ' + req.params.name)
})

// app.get('/', function(req, res) {
//     res.render('./template/index.html')
// })

// app.post('/postMethod', function (req, res) {
//     console.dir(req.body)
//     res.send('OK')
// })



app.listen(9999, function () {
    console.log('Server running prot on 3000')
})