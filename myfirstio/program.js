// biblioteka za sistemske fajlove
var fs = require('fs');

//citanje sadrzaja tekstualnog fajla
var buffer = fs.readFileSync(process.argv[2], 'utf8');

var arrayOfLines = buffer.split('\n');

var number = -1;

arrayOfLines.forEach(element => {
    number++;
});

console.log(number);