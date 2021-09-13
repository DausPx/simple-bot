// function CatF(name, numOfLegs) {
//   this.name = name;
//   this.numOfLegs = numOfLegs;
// }

// CatF.prototype.mjau = function() {
//     console.log('mjau')
// }

// CatF.prototype.greet = function() {
//     console.log('Hello I am ' + this)
// }

// const cat1 = new CatF('suzy', 4);
// const maybeCat2 = {name:'', numOfLegs:4}

// const cat2 = new CatF();
// const maybeCat = new Error();

// console.log(cat2)

class Animal {
  constructor(name, numLegs){
    this.name= name;
    this.numLegs = numLegs;
  }
  greet(){
    console.log(`${this.name} makes noise`)
  }
  goodbye(){
    console.log(`${this.name} strarts turning`)
  }
}

const animal1 = new Animal('milka', 4)

class Dog extends Animal{
  constructor(name, numLegs, furrColor, age){
    super(name, numLegs)

    this.furrColor = furrColor;
    this.age = age;
  }

  greet(){
    super.greet()
    console.log(`${this.name} barks`)
  }

  goodbye(){
    super.goodbye()
    console.log(`${this.name} cryies`)
  }
}

const animal1 = new Animal('animal', 22)
const dog1 = new Dog('rex', 4, 'gray', 5)


