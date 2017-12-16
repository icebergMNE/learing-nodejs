var http = require('http')
var fs = require('fs')


// console.log(process.argv[3]);

var server = http.createServer(function callback(request, response){
    response.writeHead(200,{
            'Content-Type': 'text/plain' }
    );
    var src = fs.createReadStream(process.argv[3]);

    // var dst = fs.createWriteStream()
    src.pipe(response);

    // console.log(stream);

    // response.end();
});

server.listen(process.argv[2]);