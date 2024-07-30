const myNumber = 42;

const myFloat = 42.00;

const myString = '42';

console.log(myNumber)

//Comparing data types
console.log(myFloat === myNumber);//returns true
console.log(myNumber === myString);//returns false

//Adding different data types
console.log(myString + 3);//returns 423
console.log(myNumber + 3);//returns 45

//Number method
console.log(Number(myString) + 3);//returns 45 using Number method
console.log(Number(myString) === myNumber);//returns true
console.log(Number('Alan'));//returns NaN (not a number)
console.log(Number(true));//returns 1
console.log(Number(false));//returns 0

//Number.isInteger() method
console.log(Number.isInteger(myString));//returns false
console.log(Number.isInteger(myNumber));//returns true

/*Number.parseFloat() method parses an argument and returns
a floating point number. If a number cannot be parsed from the
 argument, it returns NaN  */
console.log(Number.parseFloat(myNumber));//returns 42
console.log(Number.parseFloat(myString));//returns 42
console.log(Number.parseFloat(myFloat));//returns 42

const myParse = '42.123abc';
console.log(Number.parseFloat(myParse));//returns 42.123

//toFixed() method
console.log(myNumber.toFixed(3));//returns 42.000
