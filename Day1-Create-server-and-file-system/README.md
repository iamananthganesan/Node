Node js
-Node js javascript runtime environemnt

-Basically a C++ code embedde with the V8 engine 
    Note: C++ is  a machine lang , Rayn the man who invented the Node js he embedded the C++ with V8 engine 

-Bun js is also Runtime environment is faster compare to Node js    

Node js has to be installed on our machine since we need to use the javascript outside of the browser


Always go for the long support Node js version during installation

check node --version 

Open command prompt 

REPL - Read Eval Print Loop 

Node package manager will get installed along with the Node installation 

Node js having lot of build in modules like (http, filesystem and many)

const http = require('http');

const PORT = 8000;

http.createServer((request, response)=>{
    console.log("We have got new request");
    response.end("Ending the response");
}).listen(PORT)

const fs = require('fs');

---Run your node application with node with file_name EX node index.js---

every node js code wrapped with this below code 
(function(exports, require, module,__filename, __dirname){
//basically require is a params funstion that intakes the coremodule here...
    const http = require('http');
        http.createServer((request, response)=>{
            console.log("We have got new request");
            response.end("Ending the response");
        }).listen(PORT)
});




Sending response header from backend

app.route('/', (req,res)=>{
    res.setHeader('content-type','application/json');
    res.setHeader('content-type','text/json');
})


//we can send multiple responses by this way 
    res.write("Hello");
    res.write("Hello Hi");
    res.write("Hello Hi, how are you ??");
    res.end(JSON.stringify(data));