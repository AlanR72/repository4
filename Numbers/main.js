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

const myParse = '42.983abc';
console.log(Number.parseFloat(myParse));//returns 42.983

//toFixed() method
console.log (myFloat.toFixed(3));//returns 42.000.(string) toFixed will round up a float number and return a string type data.

console.log(Number.parseFloat(myParse).toFixed(2));//returns 42.98 (string)

//Chaining = using several methods together
console.log(Number.parseFloat('42.123abc').toFixed(2).toString());//returns 42.12 (string)

console.log(Number.parseInt(myFloat));//returns 42(number)
console.log(Number.parseInt(myParse));//returns 42(number)

