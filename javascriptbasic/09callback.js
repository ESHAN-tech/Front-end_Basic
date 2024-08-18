// these function accept annother function as parameter 

// setTimeout(func , 1000)// ek bar call
// setInterval(func , 1000)//call at every 1 second

// using anoymous function...
var num = 1;

function printNum() {
    console.log(num);
    num++;

    if (num == 11) {
        clearInterval(x);
    }
    // for(let i=1 ; i<=10 ; i++){
    // console.log(i);
}

var x = setInterval(printNum, 1000); // taking another function as parameter,it is only possible in js


//another way of writing the same code ...

//  var y = setInterval(() => {
//     console.log(num);
//     num++
//     if(num==11)
//         clearInterval(x)
    
//  }, 1000);

let nume = 1;
var y = setInterval(() => {
    console.log(nume);
    nume++;
    if (num === 11) {
        clearInterval(y);
    }
}, 1000);
