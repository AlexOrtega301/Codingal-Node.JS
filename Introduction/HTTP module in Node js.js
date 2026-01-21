var http = require('http');

http.createServer(function (req, res) {
    res.write('This is my first Node.js project');
    res.end();
}).listen(9476);

console.log("Server running at http://localhost:9476");
