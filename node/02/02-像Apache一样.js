var http = require('http')
var fs = require('fs')

const baseDir = './www'


var server = http.createServer()

server.on('request', function (request, response) {
	
	var url = request.url

	var filePath = '/index.html'

	if (url !== '/') {
		filePath = url
	}

	fs.readFile(baseDir + filePath, function (err, data) {
		if (err) {
			return response.end('资源没有找到')
		} 
		response.end(data)
	})

})

server.listen(9999, function () {
	console.log('Server running port 9999')
})