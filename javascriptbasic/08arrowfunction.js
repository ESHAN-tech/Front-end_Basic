// shortcut way to write the anonymous function...

// const pattern=(lineNo)=>{
//     for(let i = 1 ; i <= lineNo ; i++)
//         {
//         for(let j = 1 ; j <= i ; j++)
//             {
//                 console.log(j+"");

//             }
//         //console.log();
//     }

// }
// pattern(4);

// call back function :- function k ander ek function as parmeter use hota hai

// Shortcut way to write the anonymous function...

const pattern = (lineNo) => {
    for (let i = 1; i <= lineNo; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += j + ' ';
        }
        console.log(line.trim());
    }
}

pattern(4);
