const Car = require('./car')

const toyota = new Car('toyota', 'prius', 'black', false, 30)
const nissan = new Car('nissan', 'leaf', 'black', false, 10)

console.log(toyota.toString());
toyota.accelerate(40)
console.log(toyota.toString())

console.log(nissan.toString());
nissan.decelerate(40)
console.log(nissan.toString())
