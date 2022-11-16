// https://mochajs.org/#running-mocha-in-the-browser
const { assert, expect } = chai;

describe('functions', () => {
  // add a test hook
  var tests = 1;
  beforeEach(() => {
    console.log('Running test ' + tests++);
  });
  describe('add two numbers', () => {
    it('should return the sum of two numbers', () => {
      const num1 = 5;
      const num2 = 11;
      const sum = 16;
      expect(addTwoNums(num1, num2)).to.equal(sum);
    });
  });
  describe('is prime', () => {
    it('should return true or false', () => {
      const num = 5;
      expect(isPrime(num)).to.equal(true);
    });
    it('should throw an error if negative', () => {
      const num = -5;
      const sum = 16;
      expect(() => isPrime(num)).to.throw(Error, 'Number is not positive!');
    });
  });
});
