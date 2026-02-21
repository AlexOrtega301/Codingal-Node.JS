const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 1357;

const server = http.createServer((req, res) => {
    let filePath = "./public" + (req.url === "/" ? "/index.html" : req.url);
    const ext = path.extname(filePath);

    const mimeTypes = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".swf": "application/x-shockwave-flash"
    };

    const contentType = mimeTypes[ext] || "text/plain";

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end("Not Found");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content);
        }
    });
});

server.listen(1357, "192.168.100.34", () => {
    console.log("Servidor activo");
});