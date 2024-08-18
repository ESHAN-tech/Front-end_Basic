// fuction that does not contain name___
// to use them make refrence___ 
const userDetails= function (username , age )
{
    if (age >= 13 && age<=19){
        console.log(`${username} you are teenager`);

    }
    else if(age > 19 && age < 60){
        console.log(`${username} you are adult`);
    }
    else if(age >= 60){
        console.log(`${username} senior citizen`);
    }
    else{
        (`${username}you are a kid`);
    }

}

userDetails("eshan" , 15);

// is variable k naam se ham log function bante hai ushi
// varaible me parameter deke pass karte hai _._._._