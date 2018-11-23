// 接下来,我们要干一件使用Node很有成就感的一件事
// 你可以使用Node非常轻松的构建一个web服务器
// 在Node中串门提供了一个核心模块: http
// http 这个模块的职责就是帮你创建编写服务器的

// 1.导入http模块
var http = require('http')
 
// 2.使用http.createServer()方法创建一个Web服务器
//   返回一个Server实例
var server = http.createServer()

// 3.服务器要干吗
//   提供服务: 对数据的服务
//   发请求
//   接受请求
//   处理请求
//   发送响应

// 注册request请求事件
// 当客户端请求过来,就会自动触发服务器
// 的request请求时间,然后执行第二个参数,
// 回调处理函数
server.on('request', function () {
    console.log('收到客户端的请求了')
})

// 4.绑定端口号, 启动服务器
server.listen(9999, function () {
    console.log('服务器启动成功了, 可以进行本地访问')
})

