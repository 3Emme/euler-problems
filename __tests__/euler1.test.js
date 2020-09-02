import Euler1 from './../src/euler1.js';

describe('Euler1', () => {
  let euler;
  
  beforeEach(() => {
    euler = new Euler1([3,5],1000)
    
  });

  test('should create an object with two parameters', () => {    
    expect(euler.multArray).toEqual([3,5])
    expect(euler.maxNum).toEqual(1000)  
  });

  test('should create an array of numbers with length equal to the value of maxNum', () => {
    expect(euler.createArray().length).toEqual(euler.maxNum - 1)
  });

  test('should create an array with length equal to the sum of maxNum divided by each multiple', () => {
    let foundMult = 0;
    //let placeholder = euler.maxNum-1;
    euler.createArray();
    //expect(euler.findMult().length).toEqual((parseInt((euler.maxNum-1) / 3)) + (parseInt((euler.maxNum-1)/ 5)))
    ////expect(euler.findMult().length).toEqual((parseInt(placeholder / 3)) + (parseInt(placeholder/ 5)))
    euler.multArray.foreach(function(multiple){
      foundMult += (parseInt((euler.maxNum-1) / multiple));
    })
    expect(euler.findMult().length).toEqual(foundMult);
  });
});