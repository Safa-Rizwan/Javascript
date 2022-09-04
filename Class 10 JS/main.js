// let numbers = [2,3,66,7,8,3];
/* numbers.pop()
console.log(numbers)
numbers.push(56);
console.log(numbers)
// splice() ----> it will add one or more elements in array at given position
// it take 3 arguments(values)
// syntax: splice(position,number of elements adding,elements)

numbers.splice(1,2,788); 
// we add only one element
console.log(numbers)

// now we are adding more that one elements
numbers.splice(2,3,55,66,88);
console.log(numbers)
 */
/* for single line comments use //
for multi line comments use /* (at startting point) and  for ending point use ---> */ 
// slice() ---> it gives a piece of array
// let result = numbers.slice(1,4);
// console.log(result);

// Class Task:
/*let flowers = ["rose", "jasmine","sunflower","tulip","marrygold"];
// slice() ----> print only tulip and marygold
// splice() ----> jasmine replace lilly
let result = flowers.slice(3);
console.log(result)
flowers.splice(1,1,"lilly")
console.log(flowers);

// forEach() ----> it iterates every element of an array

flowers.forEach(function(elements){
    console.log(elements)
})*/

let numbers = [4,5,7,8,9,2,1];
// sort() ----> it sort all elments of array
let result =numbers.sort()
console.log(result);
// reverse() ----> it revers array
console.log(numbers.reverse());

let flowers = ["rose", "jasmine","sunflower","tulip","marrygold"];

/*
Data types with their methods we covered till now:
1- numbers
2- strings
3- list
4 - objects */

let mySelf = {
    "name":"Safa Rizwan", 
     "age":22,
     "favouritecolor": "blue",
        "year":2022
}
// let person 
// fname, lname, age, eyeColor, hairColor,

console.log(mySelf.favouritecolor);

