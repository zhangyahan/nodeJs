var http = required("http");

http.createServer(function (request, response) {
	// 发送 HTTP 头部
	// HTTP 状态码: 200 OK
	// 内容类型: text/plain
	response.writeHead(200, {"Content-Type": "text/plain"});

	// 发送响应数据 "hello world"
	response.end("hello world");
}).listen(8888);

// 终端打印如下内容
console.log("Server running at http://localhost:8888/");

