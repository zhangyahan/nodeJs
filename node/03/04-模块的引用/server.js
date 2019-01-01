
var http = require('http')
var fs = require('fs')

function startServer () {

    // 响应处理函数
    var onRequest = function (request, response) {
        console.log(request.url)
        console.log(request.socket.remoteAddress, request.socket.remotePort)

        // var readStream = fs.createReadStream('../03-index.html', 'utf-8')
        // response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        // readStream.pipe(response)
    }
    
    // 创建服务器实例
    var server = http.createServer(onRequest)
    
    // 监听端口号
    server.listen(3000, "0.0.0.0", function () {
        console.log("Server running port on 3000")
    })


}

exports.startServer = startServer
