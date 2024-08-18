// takes all value in form of array , sare value ek jugha collect 
// output of rest operator is always array 

let s=0;
const sumol=(...num)=>{
    num.forEach((n)=>{
        s=s+n;
    })
    console.log(` sum of ${num.length} number is ${s}`);
}
// ye sab multiple value sumol function me pass ho rahe hai 
sumol(1,2);
sumol(4,5,6,7);
sumol(1,2,3,4,5,6);

let names =["scott" , "smith", "john" , " mips"];
//  rest operator with array destructuring 

let[n1,n2, ...nm]=names;

console.log(typeof(n1));
console.log(n2);
console.log(nm);
