 var fs = require('fs');

// Rename the file "file.txt" to "myrenamedfile.txt"
fs.rename('file.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});
