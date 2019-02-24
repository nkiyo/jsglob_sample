const glob = require('glob');

glob('**/d.txt', (err, files) => {
    for(const i in files) {
        console.log(`${files[i]}`);
    }
});

