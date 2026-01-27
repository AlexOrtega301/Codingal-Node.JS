var fs = require('fs');
fs.unlink('test.txt', function (err) {
    if (err) {
        console.log('File does not exist');
        return;
    }
    console.log('File deleted!');
});
