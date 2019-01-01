var num = 1
var timer = setInterval(function () {
    console.log(num)
    num += 1
    if (num >= 5) {
        clearInterval(timer)
    }
}, 3000)
