var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function (request, response) {
	
	var url = request.url
	console.log(url)
	console.log(request.socket.remoteAddress, request.socket.remotePort)

	if (url === '/' || url === '/index') {

		fs.readFile('./www/index.html', function (err, data) {
			if (err) {
				return response.end('资源没有找到')
			} else {
				return response.end(data)
			}
		})

	} else if (url === '/login') {
		
		fs.readFile('./www/login.html', function (err, data) {
			if (err) {
				return response.end('资源没有找到')
			} else {
				return response.end(data)
			}
		})		

	} else if (url === '/a') {

		fs.readFile('./www/a.txt', function (err, data) {
			if (err) {
				return response.end('资源没有找到')
			} else {
				return response.end(data)
			}
		})

	}

})

server.listen(9999, function () {
	console.log('Server running port 9999')
})