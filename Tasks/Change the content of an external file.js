var http = require('http');
var fs = require('fs');

// Write a simple message to content.txt
fs.writeFile('content.txt', 'Hi! My First Node,JS Script', function(err) {
    if (err) {
        console.error(err);
    }
});

