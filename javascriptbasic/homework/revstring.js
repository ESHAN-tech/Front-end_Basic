const revstring = (str) => {
    // Convert the string to an array to manipulate it
    
    let s = 0;
    let e = arr.length - 1;
    let swap;

    // Perform the two-pointer swap
    while (s < e) {

        // Swap characters
        swap =str[s];
        str[s]=str[e];
        str[e]=swap;
        s++;
        e--;

    }

    // Join the array back into a string
    return arr.join('');
    
};

console.log(revstring("hello")); // Outputs "olleh"
