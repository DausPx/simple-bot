import fetch from "node-fetch";

export function countLetters(text) {
  const array = text.split("");
  const result = {};

  for (let i = 0; i < array.length; i++) {
    const letter = array[i];

    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }

  return result;
}

export const myPromise = new Promise((resolve, rejcet) => {
  let randomNumber;

  setTimeout(() => {
    randomNumber = Math.ceil(Math.random() * 10);

    if (randomNumber >= 5) {
      resolve(randomNumber);
    } else {
      rejcet(randomNumber);
    }
  }, 2000);
});

export async function getQoute() {
  const result = await fetch("https://api.quotable.io/random");
  const data = await result.json();
  return data;
}

export async function get20Quotes() {
    try {
        const result = await fetch("https://quotable.io/quotes?page=1")
        const data = await result.json()

        const formatedResult = data.results.map((element) => {
            return { tags: element.tags, content: element.content };
          });

        return formatedResult
    } catch (error) {
        console.log(error)
    } 
}

export async function getRandomQuote(tags) {
    try {
        const result = await fetch(`https://quotable.io/random?tags=${tags}`)
        const data = await result.json()

        return data
    } catch (error) {
        console.log(error)
    } 
}

