const fetch = require('node-fetch')

async function getQuote() {
  try {
    const result = await fetch("https://api.quotable.io/random");
    const data = await result.json()
    return `${data.content} —${data.author}`;
  } catch (error) {
    return error;
  }
}

async function getQuote2(minLength) {
    try {
      const result = await fetch(`https://api.quotable.io/random?${minLength && `minLength=${minLength}`}`);
      const data = await result.json()
      return `${data.content} —${data.author}`;
    } catch (error) {
      return error;
    }
  }

  async function getQuote3(maxLength) {
    try {
      const result = await fetch(`https://api.quotable.io/random?${maxLength && `maxLength=${maxLength}`}`);
      const data = await result.json()
      return `${data.content} —${data.author}`;
    } catch (error) {
      return error;
    }
  }

  async function getQuote4(minLength, maxLength) {
    try {
      const result = await fetch(`https://api.quotable.io/random?${maxLength && `maxLength=${maxLength}`}&${minLength && `minLength=${minLength}`}`);
      const data = await result.json()
      return `${data.content} —${data.author}`;
    } catch (error) {
      return error;
    }
  }

module.exports = {
    getQuote,
    getQuote2,
    getQuote3,
    getQuote4
}
