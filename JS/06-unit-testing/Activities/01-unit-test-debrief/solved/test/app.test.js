// NOTE: In order to run the solved for this activity,
// you'll have to open the 'solved' folder in your terminal
// and run 'npm i' to install the dependencies in the package.json.
// This will create your package-lock file and your node modules.
// Then you should just be able to run 'npm test' (from the 'solved' folder)
// to see the passing tests!

// Bring in the chai assertion library, mocha, and app.js file
const {assert, expect} = require('chai');
const { describe, it } = require('mocha');
const {fizzBuzz, isLeapYear, isPerfectSquare} = require('../app');


// Write tests function below this line
describe('App', function(){
	describe('fizzBuzz', function(){
		it('should return fizz buzz in place of mulitples of 15', function() {
			// Setup
			const inputNum = 15;
			const expectedResult = 'fizz buzz';

			// Exercise
			const result = fizzBuzz(inputNum);

			// Verify
			assert.strictEqual(expectedResult, result);
		});
		it('should return fizz in place of multiples of 3', function() {
			// Setup
			const inputNum = 3;
			const expectedResult = 'fizz';

			// Exercise
			const result = fizzBuzz(inputNum);

			// Verify
			assert.strictEqual(expectedResult, result);
		});
		it('should return buzz in place of multiples of 5', function() {
			// Setup
			const inputNum = 5;
			const expectedResult = 'buzz';

			// Exercise
			const result = fizzBuzz(inputNum);

			// Verify
			assert.strictEqual(expectedResult, result);
		});
		// it('should return the input number if it is not a multiple of 3 or 5')
	});
	describe('isLeapYear', function(){
		it('should return TRUE if it is a centurial leap year (divisible by 100 and 4)', function(){
			// Setup
			const inputYear = 1600;
			const expectedResult = true;

			// Exercise
			const result = isLeapYear(inputYear);

			// Verify
			assert.strictEqual(expectedResult, result);
		});

		it('should return TRUE if it is a pure leap year (divisible by 4)', function(){
			// Setup
			const inputYear = 1600;
			const expectedResult = true;

			// Exercise
			const result = isLeapYear(inputYear);

			// Verify
			assert.strictEqual(expectedResult, result);
		});
		it('should return FALSE if it is a common year (not divisible by 100 and not divisible by 4)', function(){
			// Setup
			const inputYear = 1600;
			const expectedResult = true;

			// Exercise
			const result = isLeapYear(inputYear);

			// Verify
			assert.strictEqual(expectedResult, result);
		});
	});
	describe('isPerfectSquare', function(){
		it('should be of type function', function () {
			// Setup
			const expectedResult = 'function';

			// Exercise
			const result = typeof isPerfectSquare;

			// Verify
			expect(result).to.equal(expectedResult);
		});
		it('should return TRUE if the number is a perfect square', function () {
			// Setup
			const inputNum = 16;
			const expectedResult = true;

			// Exercise
			const result = isPerfectSquare(inputNum);

			// Verify
			assert.strictEqual(expectedResult, result);
		});
		it('should return FALSE if the number is NOT perfect square', function () {
			// Setup
			const inputNum = 13;
			const expectedResult = false;

			// Exercise
			const result = isPerfectSquare(inputNum);

			// Verify
			assert.strictEqual(expectedResult, result);
    	});
	});
});
