export default function Euler1(multArray,maxNum) {
  this.multArray = multArray
  this.maxNum = maxNum
  this.numArray = []  
  this.finalArray = []
}

  Euler1.prototype.createArray = function() {
    for (let i = 0;i<this.maxNum;i++) {
      this.numArray.push(i);
    } 
    return this.numArray
  }


  Euler1.prototype.findMult = function() {
    this.multArray.forEach(function(multiple){
      this.numArray.forEach(function(number){
        if (number % multiple === 0)
          this.finalArray.push(number)
      })
    })
    console.log(this.finalArray.length)
    return this.finalArray    
  }