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

  // test('should create an array of numbers with length equal to the value of maxNum', () => {
  //   expect(euler.createArray()).toEqual(euler.maxNum)
  // });

});