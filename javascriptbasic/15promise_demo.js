let p  = new Promise((resolve , reject)=>
{
    let x=5;
    if(x!=5 ){
        resolve("value is equal");
    }
    else{
        reject(" ERROR! value is not equal");
    }
})//producer code


//consumer code ,then promise k obj k sath use hota hai
p.then((succesVal)=>{

    console.log(succesVal);

} , (ERROR)=>{

    console.log(ERROR);
})