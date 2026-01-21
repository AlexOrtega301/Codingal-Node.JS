var fs = require('fs');

// Create an empty file named mynewtextfile.txt
fs.open('mynewtextfile.txt', 'w', function (err, file) {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('File created successfully!');
});
