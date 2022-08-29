console.log("Strings Method");
let fruit= "apple";
let result= fruit.slice(0,5);
console.log(result);
let output = fruit.slice(-1,-2);
console.log(output)
// positive indexing starts from zero and goes till length of string, direction is from left to right
// negative indexing starts from -1 upto length of string with minus sign, direction is from right to left

// replace----> it replaces the present string with your desire string, it changes only first occuring string 

// Original string
let myself= "I am yourname";
console.log(myself)

let newmyself = myself.replace("yourname","Safa Rizwan");
console.log(newmyself);


// toUpperCase()
let uppercase = myself.toUpperCase();
console.log(uppercase)

// toLowerCase()
let lowercase = myself.toLowerCase();
console.log(lowercase);

// trim()
// let string="         Helloworld!       ";
// console.log(string.trim());

// Concatenation
let string1 ="Hello"
let string2 = "World"
// let final = string1 + string2;
// console.log(final);

let price1 = "250";
let price2 = "350";
let products = "the price of pen is price1 and price of marker is price2";
console.log(products)
let newproduct = `the price of pen is ${price1} and price of marker is ${price2}`;
console.log(newproduct);

let num1= 3.44 
// number with deciaml (float)
let num2 = 345;
//  number without decimal (integer)

let string4 = num2.toString();
console.log(typeof(string4))

console.log(typeof(num2));
let exp = num2.toExponential();
console.log(typeof(exp))

let passion = "I want to be a yourpassion/profession";
// replace









