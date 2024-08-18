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
// get name return promise so there we use then , async sare fun promise return kerte h

let p1=getName('anand');
p1.then((successValue_name)=>{
    let p2 = getHobbies((successValue_name))
    p2.then((hb)=>{
        console.log(hb);
    })
})

// getName('swati').then(nm=> getHobbies(nm))

//     .then(hobby => console.log(hobby))
// console.log("end");

// getName('swati').then(nm=> getHobbies(nm) , (err)=>clg(err))
// if we use the rej in get name 
//     .then(hobby => console.log(hobby))
// console.log("end");

// if one promise fail then promise get fail that's why we get undefined