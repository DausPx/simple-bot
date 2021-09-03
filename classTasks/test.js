import fetch from "node-fetch";

export function countLetters(text) {
    const array = text.split('')
    const result = {}

    for (let i = 0; i < array.length; i++) {
        const letter = array[i];

        if(!result[letter]){
            result[letter] = 1

        }else{
            result[letter] += 1
        }
    }
    
    return result
}

export const myPromise = new Promise((resolve, rejcet)=>{
    let randomNumber 

    setTimeout(()=> {
        randomNumber = Math.ceil(Math.random() * 10)

        if(randomNumber >= 5){
            resolve(randomNumber)
        }else{
            rejcet(randomNumber)
        }
    },2000)
})

export async function getQoute() {
    const result = await fetch("https://api.quotable.io/random")
    const data = await result.json()
    return data
}