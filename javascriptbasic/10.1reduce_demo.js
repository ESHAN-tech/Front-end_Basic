// reduce( callback fuvtion , intial val)
//reduce:- return single value like arr sum , avg , max val , min val
// accumlator:- is a final val , ans , result
// currentval:- sum = sum+5 then sum= sum +4 , current val occuring , optional parameter
/*
SYNTAX :-  
let sum = number.reduce((finalval , currentval )=>
    {
        finalval=finalval+currentval;
        return finalval;
},0)
*/
let number = [2, 4, 7, 8, 9];

// AVG all elements using reduce._._._
let AVG = number.reduce((finalval, currentval , idx , arr) => {
    finalval=finalval+currentval;
    if(idx === arr.length-1){// mtlb ki last index tak a gaye 
        return finalval/arr.length;
    }
    else{
        return finalval;// bher ni ayega bcoz final val ayege when whole leng get complete then it returns
    }
    
}, 0);

console.log(" average of the array = ", AVG ); 
// Sum all elements using reduce._._._
// let sum = number.reduce((finalval, currentval ) => {
//     finalval=finalval+currentval;
   
//         return finalval/arr.length;
  
    
// }, 0);

// console.log(" sum of the array = " ,sum); 

