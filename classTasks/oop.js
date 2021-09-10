function CatF(name, numOfLegs) {
  this.name = name;
  this.numOfLegs = numOfLegs;
}

CatF.prototype.mjau = function() {
    console.log('mjau')
}

CatF.prototype.greet = function() {
    console.log('Hello I am ' + this)
}

const cat1 = new CatF('suzy', 4);
const maybeCat2 = {name:'', numOfLegs:4}

const cat2 = new CatF();
const maybeCat = new Error();

console.log(cat2)




