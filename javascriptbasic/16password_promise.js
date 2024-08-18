/*new Promise((res , rej)=>{
let password="scot@123";

if(password.length > 8){
    res("password lenght is valid ");
}
else {
    rej(" !ERROR password is not valid");
}
}).then((sucess)=>{
    console.log(sucess);

} ,(fail)=>{

    console.log(fail);

}).catch((err)=>{
    console.log(err);
})*/

// catch is used for printing the run time error 
/*new Promise((res , rej)=>{
    let password="scot@123";
    
    if(password.length > 8){
        res("password lenght is valid ");
    }
    else {
        rej(" !ERROR password is not valid");
    }
    }).then((sucess)=>{
        console.log(sucess);
    
    }).catch((err)=>{
        console.log(err);
    })
  */  
    // catch is used for printing the run time error , it is called after the then function
new Promise((res , rej)=>{
    let password="scot@123";
    
    if(password.length > 8){
        res("password lenght is valid ");
    }
    else {
        rej(" !ERROR password is not valid");
    }
    }).then((sucess)=>{
        console.log(sucess);
    
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>{
        console.log("always execute");// used to close connection and always gives the o/p
    })
    