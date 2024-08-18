let numArray1=[4,6];
let numArray2=[5,7];
const newarray1 = [...numArray1 , ...numArray2];
console.log(newarray1);

const filter_spred =newarray1.filter((num)=> num >4 )
  console.log(filter_spred);

let courses = ['MERN' , 'JAVA' , 'ANDROID'];
let allcourses = ['PYTHON' ,...courses];
console.log(allcourses);

/*

spread operator spread the value at reciver side 
for example if we want pass the array value in any function the spread takes
a value from array and spread it into the reciver side or in the function...

It also helps to merge the value or different array into an new array...

*/
