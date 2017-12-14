var fs = require('fs');
var path = require('path');

// fs.readdir(process.argv[2],(err, list)=>{

//     list.forEach(path =>{
//         if(path.includes('.' + process.argv[3])){
//             console.log(path);            
//         }
//     });
// });


fs.readdir(process.argv[2],(err, list)=>{
    list.forEach(file =>{
        if(path.extname(file) === '.' +process.argv[3]){
            console.log(file);            
        }
    });
});