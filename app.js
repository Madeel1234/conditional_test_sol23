#! /usr/bin/env node
"use strict";
//Conditional Test: write a series of conditional tests. print a statement describing each test and your prediction for the 
// result of each test. Your code should look something like this:
// Create atleast 10 test. Have atleast 5 test evaluate to True and another 5 test evaluate to false. 
let car = 'subaru';
// Test 1 : equality comparision (true)
console.log("Is car== 'subaru'? I predict true.");
console.log(car == 'subaru'); //true
// Test 2 : Strict equality comparision
console.log("Is car==='subaru'? I predict true.");
console.log(car === 'subaru'); //true
//Test 3 : Inequality comparision (False)
console.log("Is car !='subaru'? I predict false.");
console.log(car != 'subaru'); //false
//Test 4 : Strict inequality comparision (False)
console.log("Is car!=='subaru'? I predict false.");
console.log(car !== 'subaru'); //false
//Test 5 : Less than comparision (False)
console.log("Is car<'subaru'? I predict false.");
console.log(car < 'subaru'); //false  (lexicographic comparision)
//Test 6 : Greater than comparision (False)
console.log("Is car>'subaru'? I predict false.");
console.log(car > 'subaru'); //false  (lexicographic comparision)
//Test 7 : Less than or equal comparision (true)
console.log("Is car<='subaru'? I predict true.");
console.log(car < 'subaru'); //True  
//Test 8 : Greater than or equal comparision (True)
console.log("Is car>='subaru'? I predict true.");
console.log(car >= 'subaru'); //True  
//Test 9 : checking truthiness (True)
console.log("Is car? I predict true.");
console.log(car); //True
//Test 10 : checking falsiness (False)
console.log("Is ! car? I predict false.");
console.log(!car); // False (negation of a truthy value)
