const student=
{
    name:"scott",
    age:20,
    course:"btech",
    email:"scot123@gmail.com",
    phone:79872871121

}

let{name , course ,phone , ...stu_data}=student
console.log(stu_data);

let collegestudent = { ...student};
console.log(collegestudent);