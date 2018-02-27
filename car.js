function Car(make, model, color, convertible, speed){
  this.make = make
  this.model = model
  this.color = color
  this.convertible = convertible ? true : false
  this.speed = speed || 0
}

Car.prototype = {
  accelerate: function(accelerator){
    this.speed += accelerator
  },
   decelerate: function(decelerator){
    this.speed < decelerator ? this.speed = 0 : this.speed -= decelerator
  },
  toString: function(){
    return `The ${this.color} ${this.make} ${this.model} is currently traveling at ${this.speed}`
  }
}

module.exports = Car
