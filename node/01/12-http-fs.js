// 1. 结合 fs 发送文件中的数据
// 2. Content-Type
// 		http://tool.oschina.net/commons
//		不同的资源对应的Content-Type是不一样的
//      图片不需要指定编码
//      一般只为字符指定编码


var http = require("http")
var fs = require("fs")

var server = http.createServer()

server.on("request", function (request, response) {

	var url = request.url

	if (url === "/") {
		fs.readFile("./resource/index.html", callback=function (err, data) {
			// body...
			if (err) {
				response.setHeader("Content-Type", "text/plain; charset=utf-8")
				response.end("访问资源不存在")
			} else {
				// data默认是二进制文件, 可以通过.toString进行转换
				// end接受两种数据格式, 二进制和字符串
				response.setHeader("Content-Type", "text/html; charset=utf-8")
				response.end(data.toString())
			}
		})
	} else if (url === "/png") {
				fs.readFile("./resource/zyh.png", callback=function (err, data) {
			// body...
			if (err) {
				response.setHeader("Content-Type", "text/plain; charset=utf-8")
				response.end("访问资源不存在")
			} else {
				// data默认是二进制文件, 可以通过.toString进行转换
				// end接受两种数据格式, 二进制和字符串
				// 图片就不需要指定编码了, 编码只是指定字符编码, 图片不是字符
				response.setHeader("Content-Type", "image/png;")
				response.end(data)
			}
		})
	}


})

server.listen(9999, function () {
	// body...
	console.log("Server running port 9999");
})