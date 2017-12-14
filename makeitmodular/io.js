var path = require('path');
var fs = require('fs');

module.exports = function(dirName, extName, callback){
    var data = [];
    fs.readdir(dirName,(err, list)=>{
        if(err) return callback(err);

        list.forEach(file =>{
            if(path.extname(file) === '.' + extName){

                data.push(file);          
            }
        });
        return callback(null, data);
    });

}


// default rijesenje
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }