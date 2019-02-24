const glob = require('glob');

const prefix = 'abc';
const id = '+([0-9])'; // => abc_123.txt, abc_12345.txt, ..
//const id = '+([a-z])'; // => abc_def.txt
//const id = '???';
const pattern = `**/${prefix}_${id}.txt`;

//const pattern = '**/d.txt';
//glob(pattern, (err, files) => {
//    console.log(`${files.length} file(s) has found.`);
//    for(const i in files) {
//        console.log(`${files[i]}`);
//    }
//});

files = glob.sync(pattern);
console.log(`${files.length} file(s) has found.`);
for(const i in files) {
    console.log(`${files[i]}`);
}

