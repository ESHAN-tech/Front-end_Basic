// const arr3 =new Array(5,8,6,9,7);/* */


// for taking input from use this 
// let course = new Array(4);
// course[0]="mern";

// for(let i = 0 ; i < names.length ; i++){
//     console.log(name[i]);
// }node array

// for each loop:- used to fetch the from the array , kind of  buil in function , takes input as anonymous function

let names=["scott" , "smith" , " john" ];

names.forEach(function(nm) {
    console.log("hello" + nm.toUpperCase());
}

);

let number = [40, 50, 12, 67, 45];
let countE = 0;
let countO = 0;
number.forEach(function(num) {
    if (num % 2 === 0) {
        countE++;
        // console.log(num + ' is even');
        
    } else {
        countO++;
        // console.log(num + ' is odd');
    }
}

);

console.log("number of even = " , countE);
console.log("number of even = " , countO);




