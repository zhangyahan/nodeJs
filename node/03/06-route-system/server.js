// 服务器

var http = require('http')
var url = require('url')  // 处理请求路径的库
var quertstring = require('querystring')


function startServer (route, handle) {

    // request handle function
    function requestHandle (request, response) {
        var pathname = url.parse(request.url).pathname
        
        console.log('Request received ' + pathname)

        // 高级方法, 任何请求方式的数据都可以获取到
        if (request.method === "POST") {
            // var data = ""  // 定义一个空字符串, 用于接受数据
            var data = []  // 定义一个空数组
            request.on('error', function (err) {
                console.error(err)
            }).on('data', function (chunk) {
                data.push(chunk)
                if (data.length > 1e6) {
                    request.connection.desroy()
                }
            }).on('end', function () {
                data = Buffer.concat(data).toString()  // 将数组转换成字符串
                route(pathname, handle, response, quertstring.parse(data))
            })
        } else if (request.method === "GET") {
            var parameter = url.parse(request.url, true).query
            route(pathname, handle, response, parameter)
        }
        

        // 简单的方法, 只能获取到get请求的数据
        // var parameter = url.parse(request.url, true).query
        // route(pathname, handle, response, parameter)
    }

    // create server obj
    var server = http.createServer(requestHandle)
    
    // bind port
    server.listen(3000, '0.0.0.0', function () {
        console.log(`Server running port 3000,You can access it at http://192.168.1.104:3000`)
    })
}

module.exports.startServer = startServer
