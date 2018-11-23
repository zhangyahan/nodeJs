// 导入http模块
var http = require('http')
// 创建实例
var server = http.createServer()

// request请求时间处理函数,需要接受两个参数
//      Request请求对象
//          请求对象可以用来获取客户端的一些请求信息
//      Response响应对象
//          响应对象可以用来给客户端发送响应消息
server.on('request', function (request, response) {
    console.log('收到客户端的请求了,请求路径是' + request.url)

    // response对象有一个方法,write可以用来给客户端发送响应数据
    // write可以使用多次,但是最后一定要使用end来结束响应,否则客户端会一直等待
    // response.write('hello world')
    // response.write('nodeJs')

    // 告诉客户端,我的话说完了,可以给用户响应的
    // response.end()

    // 由于现在我们的服务器的能力非常的弱
    // 无论是什么请求都只能响应hello world
    // 我们希望当请求不同路径,响应不同的内容

})

server.listen(9999, function () {
    console.log('服务器启动成功了, 可以进行本地访问')
})

