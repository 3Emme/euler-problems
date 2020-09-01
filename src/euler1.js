export default function Euler1(multArray,maxNum) {
  this.multArray = multArray
  this.maxNum = maxNum
  this.numArray = []
}

  Euler1.prototype.createArray = function() {
    for (let i = 0;i<this.maxNum;i++) {
      this.numArray.push(i);
    } 
    return this.numArray
  }