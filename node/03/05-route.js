
var http = require('http')
var fs = require('fs')

function onRequest (request, response) {

    console.log('Request received' + request.url)

    if (request.url === '/' || request.url === '/home') {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        fs.createReadStream('./index.html', 'utf-8').pipe(response)  // 直接将文件流使用管道的方法放到response对象中
    } else if (request.url === '/api/v1/records') {
        response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
        var obj = {
            name: 'zhangyahan',
            age: 18,
            gender: "男",
        }
        response.end(JSON.stringify(obj))
    }

}

var server = http.createServer(onRequest)

server.listen(3000, '0.0.0.0', function () {
    console.log('Server running port on 3000')
})