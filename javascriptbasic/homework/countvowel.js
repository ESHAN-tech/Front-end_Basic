const count = function(str) {
    let countV = 0;
    let countC = 0;

    for (let char of str) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) { 
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
                char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
                countV++;
            } else {
                countC++;
            }
        }
    }

    console.log("Number of vowels are =", countV);
    console.log("Number of consonants are =", countC);
}

count("hello world")