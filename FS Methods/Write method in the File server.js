var fs = require('fs');

// Create a file named test.txt and write content to it
fs.writeFile('test.txt', 'Have you seen my desktop pet?', function (err) {
    if (err) throw err;
    console.log('Content changed! No errors occured.');
});
