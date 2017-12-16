var http = require('http')
var bl = require('bl')

var links = process.argv.splice(2);
var responses = [];
var r = 0;

links.forEach(link =>{
    link = {
        'url': link,
        'data':null
    }
    responses.push(link);
});

// console.log(responses);

links.forEach(link =>{
    http.get(link, function callback(response){
        response.pipe(bl((err,data)=>{
            // console.log(data.toString());
            responses.forEach(rep=>{
                if(rep.url === link){
                    rep.data = data.toString();
                    r++;
                    // console.log(r);
                    print();
                }
            })
        }))
    });
});

function print(){

    if(r=== 3){
        responses.forEach(data=>{
            console.log(data.data);
        })
    }
}
