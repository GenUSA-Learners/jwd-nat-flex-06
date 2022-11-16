// https://devhints.io/chai
// https://devhints.io/mocha

function addTwoNums(num1, num2) {
  return num1 + num2;
}

function isPrime(num) {
  if (num > 0) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num != 1;
  } else {
    throw new Error('Number is not positive!');
  }
}
