console.log("start");
function getName(name){
    let p = new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("hello "+name);
            resolve(name);
        },2000);
    })
    return p ;
}

function getHobbies(name){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("hobbies of "+name);
            resolve(['cricket' , 'Reading' , 'Dancing'])
        }, 1000);
    })
}

// asyn key word used then used on function return promise 
// bar then likne ko avoid kerta hai...
//async function return promise
async function showHobby(){
    let nm = await getName('swati');// yaha promise return hoga or ye resolve ho skta hai ya reject
    let hobby = await getHobbies(nm);
    console.log(hobby);
}
showHobby();
console.log("end");
console.log("object of promise = ",typeof getName());
