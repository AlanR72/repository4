
//Length property
const myVariable = 'Mathematics';
console.log(myVariable.length);//returns 11

//CharacterAt Method
console.log(myVariable.charAt(0));//returns M
console.log('Every good boy'.length);//returns 14

//IndexOf Method
console.log(myVariable.indexOf('Mat'));//returns 0
console.log(myVariable.indexOf('mati'));//returns 5

//LastIndexOf Method
console.log(myVariable.lastIndexOf('at'));//returns 6
console.log(myVariable.lastIndexOf('ath'));//returns 1

//Slice Method
console.log(myVariable.slice(3,7));//returns hema
console.log(myVariable.slice(5));//returns matics
console.log(myVariable.slice(5,6));//returns m(note does not include ending value)

//toUppercase and toLowercase method
console.log(myVariable.toUpperCase());//returns MATHEMATICS
console.log(myVariable.toLowerCase());//returns mathematics

//Includes method
console.log(myVariable.includes('div'));//returns false
console.log(myVariable.includes('Mat'));//returns true

//Split method
console.log(myVariable.split('e'));//returns array ['Math', 'matics']
console.log(myVariable.split(''));//returns ['M','a','t','h','e','m','a','t','i','c','s']
console.log('Alan,Stewart,Robb'.split(','));//returns ['Alan','Stewart','Robb']
console.log('Every good boy'.split(' '));//returns ['Every','good','boy'] (note use of space in parentheses)






