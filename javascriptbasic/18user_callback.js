/*//step 1 :_ design call back
function cb( nm)
{
    console.log("in call back function " + nm);
}

function getName ( name , x){// yaha per cb just naam h
    console.log("hello" + name);

    x(name);
}

getName("scott" , cb);// yaha per call back fun name denge cb


function cb( nm)
{
    console.log("in call back function " + nm);
}

function getName ( name , x){
    console.log("hello" + name);

    x(name);
}

getName("scott" , (nm)=>{
    console.log("in call back function " + nm.toUpperCase());
});
*/

function getName(name , cb){
    setTimeout(()=>{
        return cb(name)
    },2000)
}
function getDetail(name , cbI){
    setTimeout(()=>{
        user_hobby=["basketball" , "Reading","learning"];
        cbI(user_hobby)
    },4000)
}

getName( "scott" , (nm)=>{
    
    console.log(nm);
    getDetail(nm , (hobbies)=>{
        hobbies.forEach((n) => {
            console.log(nm+" your hobbies are " + n);
            
        });
        
    })

})