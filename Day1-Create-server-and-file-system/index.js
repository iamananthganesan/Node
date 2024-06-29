//http from Node core module
const http = require('http');

const fs = require('fs');
const PORT = 8000;

const server = http.createServer((req, res) => {
    //Settings Headers for response 
    res.setHeader('codedby', 'Senthil anand');
    res.setHeader('Content-Type', 'text/html');
    // fs.appendFile('log.txt', `${new Date().toLocaleTimeString()} from ${request.url} \n`, (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     response.end("Hey yo!!!! response to the client");
    // });

    const data = {
        name: 'Senthil Anand',
        tech: 'Mern stack',
        address: { addressLine1: 'Telephone Nagar 3rd cross street', addressLine2: 'Perungudi chennai' },
        countrycode: 91,
        contactno: '+91 9791988540'
    }

    //res.end(JSON.stringify(data));
    //we can send multiple responses 
    res.write("Hello");
    res.write("Hello Hi");
    res.write("Hello Hi, how are you ??");
    res.end(JSON.stringify(data));
    res.end();
    //res.end("response from backend");

});

server.listen(PORT);