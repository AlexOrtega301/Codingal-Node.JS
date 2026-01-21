var fs = require('fs');

// Create or append to a file named mynewtextfile.txt
fs.appendFile(
    'mynewtextfile.txt',
    'This is my message\nin NodeJS',
    function (err) {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File saved successfully!');
    }
);
