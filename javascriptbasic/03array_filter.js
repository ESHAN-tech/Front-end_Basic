//  filter():- return a new array based on condition 
// for each never return array always return num,no return
// filter return array and it is a type of call back

let age=[10,20,30,40,60,17,18];
const filter_age =age.filter((num)=> {
    return num >30
});
const harsh = age.filter((num) => {return num >40});
// filter_age isme return value array form me 
console.log(`New array is = ${filter_age}`);
console.log(`original array = ${age}`);
console.log(`harsh aray is ${harsh}`)
