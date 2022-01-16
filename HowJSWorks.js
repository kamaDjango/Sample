/*
Hoisting in JS

during execution of a program we have two phase
1. creation  phase
2. execution phase

create phase: this phase contains defination of all variables
              and functions define in a program
            
execution phase: this phase contains program statements

so hoisting in js is a machanism where variables and function
declarations(creation phase) are moved to the top of their scope before
the code execute(execution phase)
*/

//code we write
// console.log(a);
// var a=10;
// console.log(a);

//code send for execution
// var a;
// console.log(a);
// a=10;
// console.log(a);

/*
in ES6 i.e ECMASCRIPT 2015 hoisting is avoided by let or const
     keyword by using the let keywordinstead of var we can void hoisting
*/

// console.log(a);
// const a=10;
// console.log(a);


//use strict mode
// "use strict"
// a=10
// console.log(a);

// "use strict"
// var a=10
// console.log(a);
// delete a
// console.log(a);


// "use strict"
// var x={
//     p1:10,
//     p2:20
// }
// console.log(x);

/*
Scope Chain and lexical Scoping:
the scope chain is used to resolve the value of variable in js
scope chain in js is laxically defined which means that we can
see what the scope chin will be only by looking at the code

at the top we have global scope which is window object
then local scope(function)

so lexical scoping means  the inner function can access variables 
defined in outer function and global scope but outer function can
access variables defined in inner function but can access variables
define in global scope but global scope can't access variables
defined inside any function
*/
// var a=10;
// function outer(){
//     var b=20;
//     function inner(){
//         var c=20;
//         console.log(`inside inner function a = ${a} and b = ${b} and c = ${c}`);
//     }
//     inner()
//     console.log(`inside inner function a = ${a} and b = ${b}`);
// }
// outer()
// console.log(`inside inner function a = ${a}`);


/*
closure:
    closure is a function object that remembers values
    in enclosing scope even if they are not present in memory

    it is a record that store a function together its environment

    a clousure unlike a plain function allows the function to 
    access those captured variables through the closure's copy
    of their values or reference,even when the function is
    invoked outside their scope
 */
// var a=10;
// function outer(){
//     var b=20;
//     console.log(`in outer  a ${a} and  b = ${b}`);
//     function inner(){
//         var c=30;
//         console.log(`inside inner function a = ${a} and b = ${b} and c = ${c}`);
//     }
//     return inner
// }
// var x=outer()
// x()
// x()
// x()
// x()

/*
Synchronous and Asynchronous Programming in JS

Synchronous: one task has to wait to complete previous task
             i.e line by line execution
Asynchronous: one task doesn't have to wait to complete
             previous task it is also callesd non blocking IO Model
*/

//Synchronous
// function a(){
//     console.log("In function a");
// }
// function b(){
//     console.log("In function b");
// }
// function c(){
//     console.log("In function c");
// }
// function d(){
//     console.log("In function d");
// }
// console.log("In global Scope");
// a()
// b()
// c()
// d()

//Synchronous

function a(){
    setTimeout(() => {
        console.log("In function a");
    }, 5000);
}
function b(){
    setTimeout(() => {
        console.log("In function b");
    }, 4000);
}
function c(){
    setTimeout(() => {
        console.log("In function c");
    }, 3000);
}
function d(){
    setTimeout(() => {
        console.log("In function d"); 
    }, 2000);
}
console.log("In global Scope");
a()
b()
c()
d()