
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