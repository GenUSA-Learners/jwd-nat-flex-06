module.exports = {

    fizzBuzz: function(inputNum) {
        if( inputNum % 15 === 0){
            console.log(`the number ${inputNum} prints "fizz buzz"`);
            return'fizz buzz';
        }else if( inputNum %3 === 0){
            console.log(`the number ${inputNum} prints "fizz"`);
            return 'fizz';
        }else if(inputNum %5 === 0){
            console.log(`the number ${inputNum} prints "buzz"`);
            return 'buzz';
        }else {
            console.log(`the number ${inputNum} is printed`);
            return inputNum;
        }
    },

    isLeapYear: function(inputYear) {
        if (inputYear % 400 == 0) {
            console.log(`${inputYear} is a centurial leap year.`);
            return true;
        } else if (inputYear % 4 == 0 && inputYear % 100 !== 0) {
            console.log(`${inputYear} is a pure leap year.`);
            return true;
        } else {
            console.log(`${inputYear} is a common year.`);
            return false;
        }
    },

    isPerfectSquare: function(inputNumber) {
        for (i = 0; i <= inputNumber; i++) {
            const perfectSquare = (i * i);
            if (perfectSquare == inputNumber) {
                console.log(`${inputNumber} IS a perfect square!`);
                return true;
            } else if (perfectSquare > inputNumber) {
                console.log(`${inputNumber} is NOT a perfect square`);
                return false;
            }
        }
    }
}

module.exports.fizzBuzz(33);
module.exports.isLeapYear(2020);
module.exports.isPerfectSquare(1244);
