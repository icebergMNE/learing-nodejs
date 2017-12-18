var http = require('http')
var url = require('url')


var server = http.createServer(function callback(request, response){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var incoming = url.parse(request.url, true);
    
    if(incoming.pathname === '/api/parsetime'){
        let data = incoming.query.iso;
        let date = new Date(data);
        var resObj = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
        response.end(JSON.stringify(resObj));

    }
    if(incoming.pathname === '/api/unixtime'){
        let data = incoming.query.iso;
        let date = new Date(data);
        response.end(JSON.stringify({"unixtime": date.getTime()}));
    }
});     

server.listen(process.argv[2]);