var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response) {
    console.log("Request received!")
    console.log(request.url)
    console.log(request.socket.remoteAddress, request.socket.remotePort)

    // Content-Type类型(text/plain, text/html, application/json)
    // response.writeHead(200, {'Content-Type': "text/plain; charset=utf-8"})
    // response.write("hello world")
    // response.end()

    // response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
    // var obj = {
    //     name: "zyh",
    //     age: 18,
    //     gender: "男",
    // }
    // response.end(JSON.stringify(obj))

    // var indexStr = fs.createReadStream(__dirname + '/index.html', 'utf8')
    // response.end(indexStr.pipe(response))
    // indexStr.pipe(indexStr)

})

server.listen(3000, '0.0.0.0',function() {
    console.log('Server running port on 3000')
})

