let arr=[3,4,5];//input array...

let sum=(a,b,c)=>{
    return a+b+c;
}

//log(sum(arr[0] , arr[1] , arr[2])) bad practice_._
console.log(sum(...arr));

// using spread operator spread the value at the reciver side 
// by spread operator . . .(reviver per spred)

//Q)copy the value in array into new array_._.

//NOTE:-
// name per cross is liye a raha h bcoz name word js me already kai jugha define hai
//to wo cross laga k mana kerta hai ki don't use it ....

let name="ESHAN";
namel=[...name];
console.log(namel);

//copy the value in array into new array by loop_._.

let nameo=[]
for(i =0 ; i < name.length ; i++)
{
    nameo[i]=name.charAt(i);// HERE WE USE .charAt(i) PROPERTIE
}  
console.log(nameo)

// rest :- multiple value ho ek varible me lena , or wo variable array hoga 
// sread:-ek variable se multiple value likalna and index vise dusre variables ko dena

