//  it also return the array but it map the element with specified value 


let employeeNames=["scott" , "smith" , "john"];

let name = employeeNames.map((name)=>{
    // isme sare name a chuke hai
    return "Mr."+name;
})
console.log(name);

employeeNames.forEach((num)=>{
    console.log("Mr"+ num);
})
// for one funtion don't need curly bracket and return
salaries =[4500 , 2000 , 3500]
let incrementetSalary=salaries.map((sal)=>sal+500);//single line function 

console.log(incrementetSalary);
