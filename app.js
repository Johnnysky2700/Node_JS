var fs = require('fs');

fs.unlink('writeMe.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('writeMe.txt was deleted');
});