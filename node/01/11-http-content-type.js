// require
// 端口号


var http = require("http")

var server = http.createServer()

server.on("request", function (request, response) {
	// 在服务器默认发送数据, 是utf-8编码的内容, 但是浏览器不知道
	// 浏览器在不知道服务器响应的编码方式时, 会按照当前操作系统的默认编码, 中文操作系统默认时gbk
	// 解决方法, 正确的告诉浏览器发送的编码方式
	// 在HTTP协议中, Content-Type就是用来告诉对方, 发送的数据内容时什么类型
	// response.setHeader("Content-Type", "text/plain; charset=utf-8")
	// response.end("hello 世界");

	var url = request.url

	if (url === "/plain") {
		// text/plain 就是普通文本
		response.setHeader("Content-Type", "text/plain; charset=utf-8")
		response.end("hello 世界")
	} else if (url === "/html") {
		// text/html html文本
		response.setHeader("Content-Type", "text/html; charset=utf-8")
		response.end('<p>hello 世界<a href="">点我</a></p>')
	}

})

server.listen(9999, function () {
	// body...
	console.log("Server running port 9999");
})