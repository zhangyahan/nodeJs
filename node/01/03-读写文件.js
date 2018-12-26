// 浏览器中的js没有读写文件的功能
// node中的js具有文件操作的能力

// fs是file-system的简写
// 在Node中如果想要进行文件操作,就必须引入fs这个核心模块
// 在fs这个核心模块中,就提供了所有的文件操作相关的API
// 例如: fs.readFile 就是用来读取文件的

// 1.使用require方法加载fs核心模块
var fs = require('fs')

// 2.读取文件
// 第一个参数就是要读取文件的路径
// 第二个参数是有个回调函数
//     error:如果读取失败,error就是错误对象
//           如果读取成功, error就是null
//     data:如果读取成功, data就是读取到的数据
//          如果读取失败, error就是错误对象
//
//     成功: data是数据, error是null
//     失败: data是null, error是错误对象
// data = fs.readFile('./01-hello-world.js', function(error, data){
    // 文件中存储的其实都是二进制数据
    // 二进制转为16进制,所以使用toString转为我们能认识的数据
//      if (data) { 
//         console.log(data.toString())
//     }
//   })


// 第一个参数: 文件路径
// 第二个参数: 文件内容
// 第三个参数: 回调函数(error)
//             写文件成功error为null
//             失败error为错误对象

// fs.writeFile('./01-hello-world.js', 'hello world', function(error){
//     if (error) {
//         console.log(error)
//     }
// })
