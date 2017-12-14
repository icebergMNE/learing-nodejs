var fs = require('fs');
var linije = -1;
fs.readFile(process.argv[2], 'utf8', function callback(err, data){
    if(err){
        throw err;
    }
    
    var niz = data.split('\n');

    niz.forEach(element => {
       linije++
    //    console.log(element); 
    });
    console.log(linije);
});


