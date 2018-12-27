// ip地址用来定位计算机
// 端口号用来定位计算机上的应用
// 所有联网的应用程序都会占用一个端口号

var http = require("http")

var server = http.createServer();

server.on("request", function (request, response) {
	// body...
	var url = request.url;
	console.log("请求的地址", url);
	console.log("请求的用户", request.socket.remoteAddress, request.socket.remotePort);

	if (url === "/" || url === "/index") {
		response.end(data="主页", encoding="utf-8")
	} else if (url === "/login") {
		response.end("登录页面")
	} else if (url === "/register") {
		response.end("注册页面")
	} else if (url === "/order") {
		var data = [
			{
				"name": "Iphone",
				"money": 8888,
			},
			{
				"name": "HUAWEI",
				"money": 9999,
			}
		]
		response.end(JSON.stringify(data))
	}

})

server.listen(9999, function () {
	// body...
	console.log("服务器启动了, 端口号是9999");
})