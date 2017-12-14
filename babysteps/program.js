let sum = 0;

let array = process.argv.slice(2);

array.forEach(element => {
    sum+= Number(element);
});

console.log(sum);