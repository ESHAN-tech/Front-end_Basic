employee ={
    name:"scott",
    age:20,
    dept:"cse"

}

console.log(employee.age);
console.log(employee.name);
console.log(employee.dept);

console.log("by square notation");

console.log(employee["name"]);
console.log(employee["age"]);
console.log(employee["dept"]);

console.log("by obj destructuring");

let{name ,age ,dept } = employee;
console.log(age);
console.log(name);
console.log(dept);



