//pyramid of doom / call back hell
// ek call back k ander ek or call back uske ander ek or call back 
// one call back is calling another call back ab=nd make it messy
//this hell is by built-in function but thier is hell of userdefine function also

setTimeout(()=>
{
    console.log("call scott");{
        setTimeout(()=>{
            console.log("scott call smith")
            setTimeout(()=>{
                console.log("smith write the tute");
            },2000)
        },2000)
    }
},2000)

//- hyphen
