/**
 * 1. var
 *    let, const : let and const are block scope
 * 2. default parameter
 * 3. template string
 * 4. 
 */

const a = 56;
const number = [56, 7, 8];
const person = {
  name: 'john smith'
}

const message = `Hi, ${person.name} has a: ${a} access to ${number[1]}`;
console.log(message);