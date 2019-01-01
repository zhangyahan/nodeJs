var fs = require('fs')
var path = require('path')

const BASETEMPLATEDIR = path.join(__dirname + '/template')

// 路由系统
function route(pathname, heandle, response, parameter) {
    if (typeof heandle[pathname] === 'function') {
        heandle[pathname](response, parameter)
    } else {
        response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
        fs.createReadStream(BASETEMPLATEDIR + '/404.html').pipe(response)
    }
}

module.exports.route = route