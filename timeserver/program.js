var net = require('net')
var time = require('strftime')


var server = net.createServer(function (socket){
    var date = new Date();

    socket.end(time('%Y-%m-%d %H:%M\n', date));

});

server.listen(process.argv[2]);