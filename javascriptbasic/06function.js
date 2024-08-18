
// _FUNCTION_WITH_NAME_._      (non anonymous function)

function addtwonum( num1 , num2)
{
    //parameters:- passed in function definition
    console.log(num1+num2);
}
//function call
addtwonum( 3 , 5);//arguments:- passed in function call
addtwonum( 5 , "46");
addtwonum( 5 , "a");
addtwonum( 5 , null);

const multiply = function multiplication(num1 , num2 ){

    console.log(num1*num2);
}
multiply(3,2);

/* function are first class obj  it can be use as variable also
its can be use a  parameter  and use as obj */

const div = function division(num1,num2){
    return num1 / num2;
}

const result2 = div (10 ,5);
console.log("RESULT :" , result2);


