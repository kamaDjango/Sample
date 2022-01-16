/*
JavaScript:1995

ECMA Script:
    ES1 :   1997
    ES2 :   1998
    ES3 :   1999
    ES5 :   2009
    ---------------------------
    ES6 :   2015
    ECMA Script 2016
    ECMA Script 2017
    ECMA Script 2018
    ECMA Script 2019
    ECMA Script 2020
    ECMA Script 2021
*/
/*
ES6 new Features:
    1. let
    2. const
    3. Arrow function
    4. MAP
    5. SET
    6. FOR OF
    7. classes
    8. Promises
    9. Default Parameters
    10. string.include()
    11. string.startswith()
    12. string.endswith()
    13. Destructuring
    14. rest and spread operator(...)
    15. Template Literals String
        `a = ${a}`
    16. Generators
    17. Async/await
    18. Array.from()
    19. Array.keys()
    20. Array.find()
    21. Array.findIndex()
    22. New Math Methods
    23. Number Properties
    24. New Number Methods
    25. New Global Methods
    26. Iterables Object.entries
    27. JavaScript Modules
    28. use strict
 */
/*
    Rest Operator: allows a function to accept an indefinte
    number of arguments as an array
*/
// function sample(a=0,b=0,c=0,d=0,e=0){
//     console.log(a,b,c,d,e);
// }
// sample(10,20,30,40,50)
// sample(10,20,30,40)
// sample(10,20,30)
// sample(10,20)
// sample(10)
// sample()

// function sample(a,b,...arr){
//     console.log(a,b,arr);
// }
// sample(10,20)
// sample(10,20,30)
// sample(10,20,30,40,50)
// sample(10,20,30,40,50,60)
// sample(10,20,30,40,50,60,70)
// sample(10,20,30,40,50,60,70,80)
// sample(10,20,30,40,50,60,70,80,90)
// sample(10,20,30,40,50,60,70,80,90,100)
/*
    spread operator:Spread operator allows an iterable to expand
    in places where 0+ arguments are expected. It is mostly used
    in the variable array where there is more than 1 values are 
    expected. It allows us the privilege to obtain a list of
    parameters from an array. Syntax of Spread operator is same as 
    Rest parameter but it works completely opposite of it.
*/

// function sample(a,b,c,d,e,...arr){
//     console.log(a,b,c,d,e,arr);
// }
// var a=[10,20,30,40,50,60,70,80,90,100]
// sample(...a)
/*
    ECMAScript 2016:
    JavaScript Exponentiation (**)
    JavaScript Exponentiation assignment (**=)
    JavaScript Array.prototype.includes
 */

/*
    ECMAScript 2017:
    JavaScript String padding
    JavaScript Object.entries
    JavaScript Object.values
    JavaScript async functions
    JavaScript shared memory
 */
// var a="Hello World"
// var b = a.padStart(20,"-")
// var c = a.padEnd(30,"-")
// console.log(b);
// console.log(c);
/*
    ECMAScript 2018
    Asynchronous Iteration
    Promise Finally
    Object Rest Properties
    New RegExp Features
 */
// function sample(){
//     var p = new Promise((resolve,reject)=>{
//          resolve("Success")
//         reject("Some Error")
//     })
//     return p
// }
// sample().then((msg)=>{
//     console.log(msg);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Done");
// })

//Object Rest Properties
// var emp={
//     eid:101,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:50000,
//     "city":"Noida",
//     "state":"UP"
// }
// var {eid,name,dsg,...empData}=emp
// console.log(eid);
// console.log(name);
// console.log(dsg);
// console.log(empData);
/*
    ECMAScript 2019
    Array.prototype.{flat,flatMap}
    Object.fromEntries
    String.prototype.{trimStart, trimEnd}
    Well-formed JSON.stringify
    Function.prototype.toString
    Symbol.prototype.description
*/

// var a=[[10,20,30,40],[40,50,60,70],[80,90,100,110]];
// console.log(a);
// var b= a.flat(1)
// console.log(b);

// var a=[[[10,20,30,40],[40,50,60,70],[80,90,100,110]]];
// console.log(a);
// var b= a.flat(2)
// console.log(b);

// var a=[[[[10,20,30,40],[40,50,60,70],[80,90,100,110]]]];
// console.log(a);
// var b= a.flat(3)
// console.log(b);

// var a=[10,20,30,40,50,60,70,80,90,100]
// var b=a.flatMap((item)=>item*5)
// console.log(b);
/*
 ECMAScript 2020
 BigInt
 Dynamic import
 Nullish Coalescing
 Optional Chaining
 Promise.allSettled
 String#matchAll
 global This
 Module Namespace Exports
 Well defined for-in order
 import.meta
 */
// var a=123456789101112131415n
// console.log(a);


/*
 Nullish Coalescing(??)
    syntax:
        statement1??statemnet2
*/
// true??console.log("World");
// console.log("Hello")||console.log("World");