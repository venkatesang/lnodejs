var http = require('http');


function onRequest(request,response){
    console.log('request received');
    response.writeHead(200, {'content-type':'text/plain'});
    response.write("Hello Aditi");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server Started");
    
    
