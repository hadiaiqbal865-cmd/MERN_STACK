// String Cancatenation
let applePieces = 20;
let bananaPieces = 24;
let mangopieces = 32;
let juice =
 "Juice with" + 
 " " +
applePieces +
"  " +
 "Pieces of Apples," + 
 bananaPieces +
  " " +
 "Pieces of Bananas, and" + 
 " " +
mangopieces + 
" " +
 "Pieces of Mangoes";
 console.log(juice);
 let a = "20";
 let b = 23;
 console.log(a + b);
 console.log(a - b);
 console.log(a * b);
 console.log(a / b);
 // Type Coercion

 // Template Literal
 let juiceNew = `Juice with ${applePieces} Pieces of Apples, ${bananaPieces} Pieces of Bananas, and ${mangopieces} Pieces of Mangoes`;
 console.log(juiceNew);

 // Loose Equality Operator: (==) 
 // it uses Type Coercion
 let x = "34";
 let y = 34;
 console.log(x == y);

 // Strict Equality Operator: (===)
 // it uses type Coercion
 
 console.log(x === y);
 let age = Number(prompt("Enter Your Age:"));
 console.log(age);
 console.log(typeof age);
if (age === 20) {
    console.log("You are eligible for Driving");
} else {
    console.log("You are not Eligible for Driving");
}