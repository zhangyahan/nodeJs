// 导入http模块
var http = require('http')
// 创建实例
var server = http.createServer()

// request请求时间处理函数,需要接受两个参数
//      Request请求对象
//          请求对象可以用来获取客户端的一些请求信息
//      Response响应对象
//          响应对象可以用来给客户端发送响应消息
// on(): 监听request请求事件
server.on('request', function (request, response) {
    console.log('收到客户端的请求了,请求路径是' + request.url)
    console.log(request.socket.remoteAddress, request.socket.remotePort)

    // response对象有一个方法,write可以用来给客户端发送响应数据
    // write可以使用多次,但是最后一定要使用end来结束响应,否则客户端会一直等待
    // response.write('hello world')
    // response.write('nodeJs')

    // 告诉客户端,我的话说完了,可以给用户响应的
    // response.end()

    // 由于现在我们的服务器的能力非常的弱
    // 无论是什么请求都只能响应hello world
    // 我们希望当请求不同路径,响应不同的内容
    
    
    // response.write('hello world')
    // response.end()

    // 上面的方式比较麻烦,可以直接使用end()
    // response.end('hello world')
    
    // 根据不同的请求路径发送不同的响应结果
    // 1.获取请求路径
    //      request.url获取是端口号之后的路径
    // 2.判断路径处理响应
 
    var url = request.url
    

    // if (url=='/' || url=='/index') {
    //     res.end('index page')
    // } else if (url=='/login') {
    //     res.end('login page')
    // } else if (url=='register') {
    //     res.end('register page')
    // } else {
    //     res.end('Not page')
    // }

    if (url === '/products') {
        var products = [
            {
                name: '苹果 X',
                price: 8888,
            },
            {
                name: '菠萝 X',
                price: 5000,
            },
            {
                name: '小辣椒 X',
                price: 1999,
            },
        ]

    }
    
    // 响应对象只能是二进制数据或者是字符串
    response.end(JSON.stringify(products))
})

server.listen(9999, function () {
    console.log('服务器启动成功了, 可以进行本地访问')
})

