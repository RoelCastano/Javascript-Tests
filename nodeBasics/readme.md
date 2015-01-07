Stream

Sanku Katti1 month ago
 
HI!!!
This tutorial is very very resourcefull!!
I was trying out the examples explained here.

I got one problem!!

Server SIde!!
var http = require('http'); //Using require javascript framework to include node modules.
var chunk;
http.createServer(function(request,response){
        response.writeHead(200);        
        request.pipe(response);
        
        request.on('end',function() {
                response.end("Done!!!\n");  //Problem
            });
    }).listen(8888);
   console.log('Listening on port 8888');


Client Side!!
 curl -d 'Hei Da' localhost:8888

Result
Hei Da!!

Problem-- I am not getting back the response "Done!!". Connection tears down at request.pipe();
request.on('end',function(){}); is not called. Why??﻿
Read more (24 lines)
1

Rakesh Chouhan1 month ago
 
@6.52 in the video, shouldn't it say "Resume when ready to read again", instead of "Resume when ready to write again", since you are already writing it, and in the previous line of code, you paused the readStream and not the writeStream﻿


mike guevarra1 week ago
