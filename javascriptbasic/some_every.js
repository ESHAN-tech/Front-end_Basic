//  all element of array weither follow some ceriteria or not, if ek be element follow condition then return true
let number=[4,2,3,2,5]
let status = number.some((num)=>{
    {
        return num>5
    }
})
console.log(status);

// ever:- opp of sum , means each element follow some condition

let evennum=[2,4,5,8,10];

let evenstatus = evennum.every((num)=>
{
    return num%2 == 0;
})
console.log(evenstatus);