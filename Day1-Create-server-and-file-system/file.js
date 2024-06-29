//file system
const fs = require('fs');

//Params => newfile name,  content type, callback => err, data
fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("err", err);
    } else {
        console.log("data is present in the file", data);
    }
});
//Params => newfile name,  content to be place in created file, callback => err, data
fs.writeFile('sample.txt', 'Hey am the sample text file', (err) => {
    if (err) {
        console.log("err", err);
    } else {
        console.log("data is present in the file");
    }
});