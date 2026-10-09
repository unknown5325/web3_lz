// task 1
// function getRectangleArea(width, height) {
//     return width * height
// }

// console.log(getRectangleArea(5, 10))
// console.log(getRectangleArea(5, 5))

// task 2
// function getCircleCircumference(radius) {
//     return 2*Math.PI*radius
// }

// console.log(getCircleCircumference(5))
// console.log(getCircleCircumference(3.14))
// console.log(getCircleCircumference(0))

// task 3
// function getAverage(val1, val2) {
//     return (val1 + val2) / 2
// }

// console.log(getAverage(5, 5))
// console.log(getAverage(10, 0))
// console.log(getAverage(-3, 3))

// task 4
// function getDistanceBetweenPoints(x1, y1, x2, y2) {
//     return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
// }

// console.log(getDistanceBetweenPoints(0, 0, 0, 1))
// console.log(getDistanceBetweenPoints(0, 0, 1, 0))
// console.log(getDistanceBetweenPoints(-5, 0, 10, -10))


// task 5
// function getLinearEquationRoot(a, b) {
//     return -b/a
// }

// console.log(getLinearEquationRoot(5, -10))
// console.log(getLinearEquationRoot(1, 8))
// console.log(getLinearEquationRoot(5, 0))

// task  6
// function getAngleBetweenVectors(x1, y1, x2, y2) {
//     return Math.acos((x1*x2 + y1*y2) / ((Math.sqrt(x1 ** 2 + y1 **2) * (Math.sqrt(x2**2 + y2**2)))))
// }

// console.log(getAngleBetweenVectors(1, 0, 0, 1))
// console.log(getAngleBetweenVectors(0, 1, 0, -1))
// console.log(getAngleBetweenVectors(0, -1, 1, 0))
// console.log(getAngleBetweenVectors(0, 1, 0, 1))

// task7
// function getLastDigit(value) {
//     return new String(value).slice(-1)
// }

// console.log(getLastDigit(100))
// console.log(getLastDigit(37))
// console.log(getLastDigit(5))
// console.log(getLastDigit(0))

// task 8
// function parseNumberFromString(value) {
//     return parseFloat(value)
// }

// console.log(parseNumberFromString('100'))
// console.log(parseNumberFromString('37'))
// console.log(parseNumberFromString('-525.5'))

// task 9
// function getParallelepipedDiagonal(a, b, c) {
//     return Math.sqrt(a**2 + b**2 + c**2)
// }

// console.log(getParallelepipedDiagonal(1, 1, 1))
// console.log(getParallelepipedDiagonal(3, 3, 3))
// console.log(getParallelepipedDiagonal(1, 2, 3))

// task 10
// function roundToPowerOfTen(num, pow) {
//     if (pow == 0){
//         return num
//     }
//     else {
//         let int = Math.pow(10, pow)
//         return Math.round(num /int) * int
//     }
// }

// console.log(roundToPowerOfTen(1234, 0))
// console.log(roundToPowerOfTen(1234, 1))
// console.log(roundToPowerOfTen(1234, 2))
// console.log(roundToPowerOfTen(1234, 3))
// console.log(roundToPowerOfTen(1678, 0))
// console.log(roundToPowerOfTen(1678, 1))
// console.log(roundToPowerOfTen(1678, 2))
// console.log(roundToPowerOfTen(1678, 3))

// task 11
// function isPrime(n) {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             return 'False'
//         }
//         else {
//             return 'True'
//         }
//     }
// }

// console.log(isPrime(4))
// console.log(isPrime(5))
// console.log(isPrime(6))
// console.log(isPrime(7))
// console.log(isPrime(11))
// console.log(isPrime(12))
// console.log(isPrime(16))
// console.log(isPrime(17))

// task 12
// function toNumber(value, def) {
//     let int = Number(value)
//     if (typeof value == 'string' && value.trim() == ''){
//         return def
//     }

//     if (Number.isFinite(int)){
//         return int
//     }
//     else{
//         return def
//     }
// }

// console.log(toNumber(null, 0))
// console.log(toNumber('test', 0))
// console.log(toNumber('1', 0))
// console.log(toNumber(42, 0))
// console.log(toNumber(new Number(42), 0))

// task 13
// function getCube(num) {
//     return num ** 3
// }

// console.log(getCube(3))
// console.log(getCube(-2))
// console.log(getCube(0))

// task 14
// function getFibonacciNumber(index) {
//     return Number(Math.round((1.6180339**index) / Math.sqrt(5)))
// }

// console.log(getFibonacciNumber(0))
// console.log(getFibonacciNumber(1))
// console.log(getFibonacciNumber(2))
// console.log(getFibonacciNumber(3))
// console.log(getFibonacciNumber(10))

// task 15
// function getSumToN(n) {
//     let num = 0
//     for (let i = 0; i <= n; i++) {
//         num += i
//     }
//     return num
// }

// console.log(getSumToN(5))
// console.log(getSumToN(10))
// console.log(getSumToN(1))

// task 16
// function getSumOfDigits(num) {
//     let str = new String(num)
//     let int = 0
//     for (let i = 0; i < str.length; i++) {
//         int += new Number(str[i])
//     }
//     return int
// }

// console.log(getSumOfDigits(123))
// console.log(getSumOfDigits(202))
// console.log(getSumOfDigits(5))

// task 17
// function isPowerOfTwo(num) {
//     return Number.isInteger(Math.log2(num))
// }

// console.log(isPowerOfTwo(4))
// console.log(isPowerOfTwo(16))
// console.log(isPowerOfTwo(15))

// task 18
// function getSine(num) {
//     return Math.sin(num)
// }

// console.log(getSine(0))
// console.log(getSine(Math.PI / 2))

// task 19
// function numberToStringInBase(number, base) {
//     return number.toString(base)
// }

// console.log(numberToStringInBase(255, 16))
// console.log(numberToStringInBase(2, 2))

// task 20
// function toExponential(nubmer, fractionDigits) {
//     return nubmer.toExponential(fractionDigits)
// }

// console.log(toExponential(12345, 2))

// task 21
// function toFixed(number, fractionDigits) {
//     return number.toFixed(fractionDigits)
// }

// console.log(toFixed(12345, 2))
// console.log(toFixed(12.345, 1))

// task 22
// function toPrecision(number, precision) {
//     return number.toPrecision(precision)
// }

// console.log(toPrecision(12345, 7))
// console.log(toPrecision(12.345, 4))

// task 23
// function getNumberValue(number) {
//     return number.valueOf()
// }

// console.log(getNumberValue(5))
// console.log(getNumberValue(-5))

// task 24
// function isNumber(number) {
//     return Number.isFinite(number)
// }

// console.log(isNumber(Infinity))
// console.log(isNumber(NaN))
// console.log(isNumber(0))
// console.log(isNumber('a' / 1))
// console.log(isNumber('a'))
// console.log(isNumber(5))
// console.log(isNumber('5'))

// task 25
// function isInteger(number) {
//     return Number.isInteger(number)
// }

// console.log(isInteger(5))
// console.log(isInteger(5.1))
// console.log(isInteger('5'))

// task 26
// function getFloatOnString(str) {
//     return parseFloat(str)
// }

// console.log(getFloatOnString('4.567abcdefgh'))
// console.log(getFloatOnString('abcdefgh'))

// task 27
// function getIntegerOnString(str, base) {
//     return parseInt(str, base)
// }

// console.log(getIntegerOnString('4.567abcdefgh', 10))
// console.log(getIntegerOnString('abcdefgh', 10))
// console.log(getIntegerOnString('1.234', 2))
// console.log(getIntegerOnString('10', 8))

// task 28
// function isSafeInteger(number) {
//     return Number.isSafeInteger(number)
// }

// console.log(isSafeInteger(10))
// console.log(isSafeInteger(3.5))
// console.log(isSafeInteger(2 ** 53))

// task 29
// function roundToSmallestInteger(number) {
//     return Math.floor(number)
// }

// console.log(roundToSmallestInteger(5.9))
// console.log(roundToSmallestInteger(-5.1))

// task 30
// function roundToLargestInteger(number) {
//     return Math.ceil(number)
// }

// console.log(roundToLargestInteger(5.1))
// console.log(roundToLargestInteger(-5.9))

// task 31
// function roundToNearestInteger(number) {
//     return Math.round(number)
// }

// console.log(roundToNearestInteger(5.5))
// console.log(roundToNearestInteger(5.4))
// console.log(roundToNearestInteger(-5.5))

// task 32
// function getIntegerPartNumber(number) {
//     return Math.trunc(number)
// }

// console.log(getIntegerPartNumber(5.5))
// console.log(getIntegerPartNumber(5.4))
// console.log(getIntegerPartNumber(-5.5))

// task 33
// function getSumOfNumbers(x1, x2, x3) {
//     if (x1 < 1 || x2 < 1 || x3 < 1 ){
//         return (x1 + x2 + x3).toFixed(1)
//     }
//     else{
//         return x1 + x2 + x3
//     }
// }

// console.log(getSumOfNumbers(1, 2, 3))
// console.log(getSumOfNumbers(0.1, 0.2, 0.3))

// task 34
// function getMaxNumber(firstNumber, secondNumber) {
//     if (firstNumber >= secondNumber) {
//         return firstNumber
//     }
//     else {
//         return secondNumber
//     }
// }

// console.log(getMaxNumber(1, 2))
// console.log(getMaxNumber(-5, -6))
// console.log(getMaxNumber(0, 5))

// task 35
// function getRandomInteger(min, max) {
//     if (max > 0){
//         return Math.round(Math.random() * max)
//     }
//     else {
//         return Math.round(Math.random() * min)
//     }

// }

// console.log(getRandomInteger(1, 2))
// console.log(getRandomInteger(-5, 0))
// console.log(getRandomInteger(-1, 1))

// task 36
// function getHypotenuse(a, b) {
//     return Math.sqrt(a ** 2 + b ** 2)
// }

// console.log(getHypotenuse(3, 4))

// task 37
// function getCountOfOddNumbers(number) {
//     let k = 0
//     for (let i = 0; i <= number; i++) {
//         if (i % 2 == 1){
//             k += 1
//         }
//     }
//     return k
// }


// console.log(getCountOfOddNumbers(4))
// console.log(getCountOfOddNumbers(5))
// console.log(getCountOfOddNumbers(10))
// console.log(getCountOfOddNumbers(15))

