let person={
    "fname" : "Safa",
    "lnam" : "Rizwan",
    "eyeColor" : "black",
    "favouritColor" : "blue"
};
// console.log(person.fname);

// Data types (all cover)
// True/False
// Boolean Operator ----> in answer we will get boolean value(True/False)

/* Boolean Operators
1- or (||)
syntax: condition1 or condition2 ----> True (if any of condition becomes true, your result will be true)

 OR table:
condition1    condition2      result
     true         false         true
     false        true          true
     true         true          true
     false        false         false  

2-And (&&)
syntax: condition1 and condition2 -----> True(if all conditions are true, your result will be true)

And Table:
condition1    condition2   Result
    true           false     false
    false          true      false
    true           true      true
    false          false    false 

3- notEqual  (!=), not(!) 
syntax: (condition1)not ----> opposite result (it will give opposite of final value) 

Not table:
condition   result
true        false
false       true*/ 

let condition1 = 3<4;
// console.log(condition1);
let condition2 = 4>5;
// console.log(condition2);

// let or = condition1 && condition2;
// console.log(or);
// let result = true && true;
// console.log(result)

// let result = !false;
// console.log(result)


/* if else structure
syntax:
if (conditions){
    #result/output/code  
}*/


 let condition="its raining";

 if (condition=="its raining"){
    console.log("we will go on a picnic");
 }

let number=10;

if (number<5){
    console.log("result is true")
};
// Class Task : make a variable with name "marks" and check it lesst than 60, if it is than print "you get less marks"

let marks= 45;
if (marks<60){
    console.log("you get less marks")
}

// Class Task:
// make a variable with name "day" and check it is equalto sunday, if it is than print "Today, is holiday"



