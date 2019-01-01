// 视图处理函数

var fs = require('fs')
var path = require('path')

const BASETEMPLATEDIR = path.join(__dirname + '/template')

function home (response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    fs.createReadStream(BASETEMPLATEDIR + '/home.html').pipe(response)
}

function review (response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    fs.createReadStream(BASETEMPLATEDIR + '/review.html').pipe(response)
}

function api_records (response, parameter) {
    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
    var obj = {
        name: 'zhangyahan',
        age: 19,
        gender: '男',
    }
    response.end(JSON.stringify(parameter))
}

module.exports.home = home
module.exports.review = review
module.exports.api_records = api_records
