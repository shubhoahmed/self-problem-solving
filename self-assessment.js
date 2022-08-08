let numners = 25;
let name = 'Shunho Ahmed';
const isMarried = true;
// addition 
let x = 24;
let y = 4;
let resut = x + y;
let resut1 = x - y;
const resut3 = x * y;
const resut4 = x / y;
const reminder = x % y;
// console.log('Add =', resut, 'Sub=', resut1, 'Mul=', resut3, 'div=', resut4, 'reminder=', reminder);

const greater = x > y;
const smaller = x < y;
const equal = x == y;
const notEqual = x !== y;
const greatEqual = x >= y;
const lessEqual = x <= y;
// const greatEqual = x >= y;
// console.log(greater, smaller, equal, notEqual, greatEqual, lessEqual);
// self assesment 5
let salary = 27500;
let bike = 1;
const gotMarried = true;
if (salary > 20000 && gotMarried === true && bike >= 1) {
    console.log('You will get a japan tour');
}
else if ((salary > 20000) || gotMarried === false && bike >= 1) {
    console.log('You will get a tour Barma')
}
else {
    console.log('Stay in Bangladesh');
}
// self assesment 6

let number1 = 48;
if (number1 % 2 === 0) {
    console.log('This is an Even Number');
}
else {
    console.log('This is an Odd Number')
}
// self assessment- 7
let i = 7;
while (i <= 19) {
    console.log(i);
    i += 2;
}

// self assessment- 8
const marriedFriend = ['Sojib', 'Alamin', 'Emon', 'Rasel', 'Salam']; //Arr-Decl
let seeLength = marriedFriend.length; // Array length check
marriedFriend[3] = 'Romel'; // Array's 4th position value change
marriedFriend.push('Rajib'); // Added a element to an array
marriedFriend.push('Shahadat'); // // Added an element to an array
marriedFriend.pop(); // Remove an element from array

// self assessment- 9
for (let i = 0; i < marriedFriend.length; i++) {
    console.log(marriedFriend[i]);
}
// self assessment- 10
let demoNumbers = [25, 39, 68, 73, 81, 42, 64, 94, 108, 85, 99];
for (let i = 0; i < demoNumbers.length; i++) {
    let number = demoNumbers[i];
    if (number > 80) {
        console.log(number);
    }
}
// self assessment- 11
function doMultiplication(a, b, c) {
    return a * b * c;
}
let returnResult = doMultiplication(5, 8, 4);
console.log('Multiplication of three number is:', returnResult);

// self assessment- 12
const shubho = {
    name: 'Shubho Ahme',
    age: 23,
    maritalStatus: 'No'

}
shubho.age = 21;
console.log(shubho);







