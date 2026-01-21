var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    // Read HTML file and return its content
    fs.readFile('myfile.html', function (err, data) {

        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('File not found');
            return res.end();
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });

}).listen(8080);

console.log("Server running at http://localhost:8080");
