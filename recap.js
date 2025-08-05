/**
 * 1. var
 *    let, const : let and const are block scope
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and Spread operator
 * 6. Object.keys, Object.values, Object.entries => ES6
 * 7. for of used in array and string
 * 8. for in loop used in object
 */

// template string
const a = 56;
const number = [56, 7, 8];
const person = {
  name: 'john smith'
}

const message = `Hi, ${person.name} has a: ${a} access to ${number[1]}`;
console.log(message);

// arrow function
const square = x => x * x;
const sum = (a, b) => a + b;

// destructuring and spread operator
const {age, z, ...others } = {x: 2, y: 5, z: 3, name: 'john smith', age: 55}
const [first, second, ...remaining] = ['hello', 'his', 'name', 'is', 'john'];