"use strict";

//functinal progrmaing
//isolated functions
//pure functions
//functions with limited side efects
// const array = [1, 2, 3];
// const idx = 5

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
// }

// function getIndex(arr, index) {
//     let result
//     arr.forEach((element, i) => {
//         if(i === index){
//             result = element
//         }
//     });

//     return result
// }

// const array = [
//   { id: 1, name: "Suad" },
//   { id: 2, name: "Ivan" },
//   { id: 3, name: "Dzejlan" },
//   { id: 4, name: "Izo" },
//   { id: 5, name: "Belma" },
//   { id: 6, name: "Arijan" },
//   { id: 7, name: "Emin" },
//   { id: 8, name: "Daris" },
// ];

// const arr = array.map((item => item.name))

// console.log(arr)

// function getElement(array, index) {
//     const result = array.slice(index,index+1)
//     return result[0]
// }

// console.log(getElement(array,))

const array = [1,2,3,4,5,6]

Array.prototype.MyMap = function (callback) {
    let newArray = []
    console.log(this)

    this.forEach(element => {
        newArray.push(callback(element))
    })

    return newArray
}

const a = array.MyMap((element => element*2))

console.log(a)