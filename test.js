var musicRecord = {
    name : 'Hard cancer',
    year: '1997',
    author: 'Ivan Slavkovic',
    numberSold: 200,
    address: {
        street: 'Jalija',
        number: '23',
        country: 'Serbia'
    }
}

function itHas(object, key, value) {
    var a = Object.keys(object).includes(key)
    var b = Object.values(object).includes(value)
    console.log(a,b)
// console.log(Object.keys(object))
// console.log(Object.values(object))
}

itHas(musicRecord, 'nest', 'Ivan Slavkovic')


