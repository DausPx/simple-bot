'use strict'

// arrow function
// arrow function with params
// rest params
// Spread operator
 
// let temp = {
//     ucenik: { id: 'this' }, 
//     ucenki2: { id: 'nest' }, 
//     ucenik3: { id: "ivan" },
//     sdfsdfsd: { id: 'sdfsdfsdf'}
// }

// let longestString = (object) => {
//     let tempObject = {...object}
//     let tempValues = Object.values(object)
//     let temKeys = Object.keys(object)
//      for (let i = 0; i < tempValues.length; i++) {
//         const element = tempValues[i];
//         if(element.id === 'ivan'){
//             tempObject[temKeys[i]].surname = 'slavkovic'
//         }  
//     }

//     console.log(tempObject)
// }
let temp = [ 
    { id: 'this' }, 
    { id: 'nest' }, 
    { id: "ivan" },
    { id: 'sdfsdfsdf'}
]


let longestString = (array) => {
    let tempArray = [...array]

    for (let i = 0; i < tempArray.length; i++) {
        const element = tempArray[i];
        if(element.id === 'nest'){
            element.surname = 'ivan'
        }
    }
    console.log(tempArray)
    }

longestString(temp)