                // Data Types
// There are 2 data types 
   // 1. Primptive data type 
// There are seven primptive data types
// 1. Number (Decimal and non-decimal)
let x = 45;
let y = 78.8;
console.log(x,y);
console.log(typeof x, typeof y);
// 2. String (Characters)
let FirstName = "Hadia";
let LastName = "Iqbal";
console.log(FirstName, LastName);
console.log(typeof FirstName, typeof LastName);
// 3. Boolean (true and false)
let a = 33;
let b = 78;
let c = a > b;
console.log(c);
console.log(typeof c);
// 4. Undefined (value is not defined or empty value)
let num1;
console.log(num1);
console.log(typeof num1);
// 5. Null (Empty Value)
// 6. Symbols (Specific Equation, Unique type of data)
// 7. BigInt (Huge Data or Large Data)
// let num2 = 1234567-------n;

   // 2.Non-primptive data type
// There are 2 non-primptive data type
// 1. Arrays
// 2. Objects

             // Type Conversion
let num2 = Number("45");
console.log(num2);
console.log(typeof num2);
// let age = Number(prompt("Enter Your Age"));
//console.log(age);
//console.log(typeof age);
         //let , const and var
  // 1. let
// => You cannot Redeclare a variable with let keyword
// let age;
// => You can Reassign a variable with let keyword
num2 = 67;
console.log(num2);
// => let is Block Scope
  // 2. Const
// => Youn cannot Redeclare a variable with const keyword
// const num2;
// => You cannot Reassign a variable with const keyword
const number = 89;
console.log(number);
// number = 90;
// console.log(number);
// Block Scope
  // 3. var
// => You can Redeclare a variable with var keyword
var h = 33;
console.log(h);
var h = 67;
console.log(h);
// => You can Reassign a variable with var keyword
h = 99;
console.log(h);
// => Global Scope

