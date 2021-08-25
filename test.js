'use strict'


// destructuring object
// assign new names
// nested object
// desturcturing arrays
// rest of array
// destructuring function propss
// template literals ``
// object propery shorthand

// const car = {
//     name: 'BMW',
//     year: '2021',
//     horsePower: '2.2'
// }

// const person = {
//     name: 'Milan',
//     surname: 'Milanovic',
//     address: {
//         street: '28. novembar',
//         city: 'Novi Pazar'
//     }
// }

let sentence = "this has happend long time ago. but i don't think so."

function wordToUpper(string) {
    let array = string.split('.')
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    console.log(array)
}

 
wordToUpper(sentence)