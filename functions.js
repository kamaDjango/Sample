/**
 * function:
 * function is a building block on any program by which we can divide
 * our large program into small parts
 * or
 * function is group of statements
 * or function is a self contained statement block
 * 
 * Adnatages of using a function:
 * 1. function provide a feature of code reusability
 * 2. function decrease instruction  space of a program
 * 3. function decrease data space of a program
 * 4. function increase code readability
 * 
 * types of functions on basis of arguments and return value
 * 1. function without return value without parameter
 * 2. function with return value without parameter
 * 3. function without return value with parameter
 * 4. function with return value with parameter
 * 
 * Note1: a function can access variables defines in its enclosing scope
 * Note2: a function can't access variables defined in another
 *        function directly to do so we have to use concept of
 *        return value and parameters
 * Note3: an encolsing scope can't access variables define inside
 *        a function
 */
//sample function
/*
function sample(){
    console.log("In sample function");
}
console.log("In main Scope");
sample()
console.log("Back to main Scope");
*/
//function call within function
/*
function A(){
    console.log("In function A");
    B()
    console.log("Back to function A");
}
function B(){
    console.log("In function B");
    C()
    console.log("Back to function B");
}
function C(){
    console.log("In function C");
}
console.log("In main Scope");
A()
console.log("Back to main Scope");
*/

// 1. function without return value without parameter
/*
function add(){
    var a=10
    var b=20
    var sum=a+b
    console.log("sum = ",sum);
}
function sample(){
    add()
}
sample()
*/

// 2. function with return value without parameter
/*
function add(){
    var a=10
    var b=20
    var sum=a+b
    return sum
}
function sample(){
    // var s=add()
    // console.log("sum = ",s);
    console.log("sum =",add());
}
sample()
*/

// 3. function without return value with parameter
/*
function add(x,y){      //parameter
    var sum=x+y
    console.log("sum = ",sum);
}
function sample(){
    var a=10
    var b=20
    add(a,b)        //arguments
}
sample()
*/
// 4. function with return value with parameter
/*
function add(x,y){      //parameter
    var sum=x+y
    return sum
}
function sample(){
    var a=10
    var b=20
    var s=add(a,b)        //arguments
    console.log("sum = ",s);
}
sample()
*/


//default parameters
/*
function sample(a=0,b=0,c=0){
    console.log("a =",a,"b =",b,"c =",c);
}
sample(10,20,30);
sample(10,20);
sample(10);
sample();
*/

//function returing an Array
/*
function sample(){
    var a=[10,20,30,40,50,60,70,80,90,100];
    return a
}
console.log(sample());
*/

//anonymous function
/*
function check(a,b){
    return a<b?a:b
}
console.log(check(10,20));
*/
/*
var check = function(a,b){
    return a<b?a:b
}
console.log(check(10,20));
*/
//arraow function or fat arrow function
//Note: if we have only one line in function then in fat arrow
//function {} are optional and return keyword also optional

/*
var check = (a,b)=>a<b?a:b
console.log(check(10,20));
*/

//Immediatly invoked function
//(function(a,b){return a<b?console.log(a):console.log(b);})(10,20)
//((a,b)=>a<b?console.log(a):console.log(b))(10,20)

//storage class
/**     
var             function level
let             block level
const           block level and read only
no keyword      global
 */
/*
function sample(){
    if(true){
        a=10;
        var b=20;
        let c=30;
        const d=40;
        console.log("Inside if block of Sample functin ",a,b,c,d);
    }
    console.log("outside if block of Sample functin ",a,b);
}
sample()
console.log("outside of Sample functin ",a);
*/

//Recursion: when function call itself
function sample(a){
    a++
    console.log("In sample function");
    if(a<5)
        sample(a);
    console.log("Back to sample function");
}
console.log("In main Scope");
sample(0)
console.log("Back to main Scope");