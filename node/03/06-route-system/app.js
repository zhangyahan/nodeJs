// 主逻辑模块, 主要负责各个模块的调用

var server = require('./server')  // 服务器模块, 主要的服务器逻辑
var router = require('./router')  // 路由器模块, 主要负责用户的请求路径处理模块
var headler = require('./handler')  // 视图处理函数

// 创建url与视图处理函数的映射关系
var headle = {}
headle['/'] = headler.home
headle['/home'] = headler.home
headle['/review'] = headler.review
headle['/api/v1/records'] = headler.api_records


server.startServer(router.route, headle)
