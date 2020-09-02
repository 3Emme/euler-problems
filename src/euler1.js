export default function Euler1(multArray,maxNum) {
  this.multArray = multArray
  this.maxNum = maxNum
  this.numArray = []  
  this.finalArray = []
  this.finalTotal = 0
}

  Euler1.prototype.createArray = function() {
    for (let i = 1;i<this.maxNum;i++) {
      this.numArray.push(i);
    } 
    return this.numArray
  }


  Euler1.prototype.findMult = function() {
    let numArray = this.numArray
    let finalArray = this.finalArray
    this.multArray.forEach(function(multiple){      
      numArray.forEach(function(number){       
        if (number % multiple === 0) {          
          finalArray.push(number)
        }
      });
    });
    console.log(this.finalArray.length)
    return this.finalArray    
  };

  Euler1.prototype.addMult = function() {
    let finalTotal = this.finalTotal;
    this.finalArray.forEach(function(number){
      finalTotal += number;
    })
    //this.finalTotal = finalTotal
    return finalTotal;
  } 