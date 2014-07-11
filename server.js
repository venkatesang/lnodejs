var http = require('http');
var url = require('url');


function start(route, handle){
    function onRequest(request,response){
        console.log('request received');
        var pathname = url.parse(request.url).pathname;
        console.log('Request for' + pathname + 'received');
//        route(handle, pathname);
        response.writeHead(200, {'content-type':'text/plain'});
       // response.write("Hello Aditi");
       var content =  route(handle, pathname);
       response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server Started");

}

exports.start = start;



