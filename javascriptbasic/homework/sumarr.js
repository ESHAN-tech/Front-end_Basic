// Write anonymous function in Java Script which accept array containing numbers and return the
// sum of numbers.

const arrsum = function(arr)
{
    if (!Array.isArray(arr)) {
        return "Input is not an array";
    }
    
    let sum = 0;
    for(let i of arr){
        sum = sum + i;
    }

    return sum ;

}

console.log(arrsum([1,2,3,4]));
