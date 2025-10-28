var fs = require('fs');

// fs.readFile('readMe.txt', 'utf8', function(err, data) {
//     fs.writeFile('writeMe.txt', data);
// });

fs.readFile('readMe.txt', 'utf8', function(err, data) {
    if (err) {
        console.error('readFile error:', err);
        return;
    }
    fs.writeFile('writeMe.txt', data, function(err) {
        if (err) {
            console.error('writeFile error:', err);
            return;
        }
        console.log('writeMe.txt saved');
    });
});
