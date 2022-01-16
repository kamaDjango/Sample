/*
String: collection of Characters or Sequence of Characters or
        array of Characters
 */
//String Constant
/*
var a="Hello World"
var b='Hello World'
console.log(a);
console.log(b);
*/

//String using Loops
// var a="JavaScript is a Scripting Language"
//for Loop
/*
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}
*/

//for in
/*
for(let i in a){
    console.log(a[i]);
}
*/

//for of
/*
for(let i of a){
    console.log(i);
}
*/

//While Loop
/*
let i=0
while(i<a.length){
    console.log(a[i]);
    i++;
}
*/

//Do While Loop
/*
let i=0
do{
    console.log(a[i]);
    i++;
}while(i<a.length);
*/

//charAt() return character at any specific index
// console.log(a.charAt(5));

//charCodeAt(): return Unicode of first character of String
// console.log(a.charCodeAt());
/*
A=65    a=97    0=48
B=66    b=98    1=49
-
Z=90    z=122   9=57
*/

//fromCharCode(): convert a Unicode into Character
// console.log(String.fromCharCode(65,66,67,68,69,70));

//indexOf()
// console.log(a.indexOf('a'));
//lastIndexOf()
// console.log(a.lastIndexOf('a'));
//search()
// console.log(a.search("e"));
//includes()
// console.log(a.includes('M'));
// console.log(a.includes('a'));

//concat
/*
var a="Hello"
var b="World"
var c=a+" "+b
var d=a.concat(" ",b)
console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/

//startsWith()
//endsWith()

/*
var a="www.google.com"
if(a.startsWith("www."))
console.log("It is a Web Address");
else if(a.endsWith("@gmail.com"))
console.log("It is a Gmail Id");
else
console.log(("It is a Normal Message"));
*/

//toUpperCase()
//toLowerCase()
//toLocaleUpperCase()
//toLocaleLowerCase()
/*
var a="JavaScript is a Scripting Language"
var b=a.toUpperCase()
var c=a.toLowerCase()
console.log(a);
console.log(b);
console.log(c);
*/

//SubStr() return a substring from pos to number of characters
//SubString() return a substring from pos to pos  characters
/*
var a="JavaScript is a Scripting Language"
console.log(a.substr(5,20));
console.log(a.substring(5,20));
*/

//repeat()
// var a="JavaScript"
// console.log(a.repeat(5));
//slice()

//split()
// var a="10 20 30 40 50 60 70 80 90 100"
// var b=a.split(" ")
// console.log(a);
// console.log(b);

//trim() remove all leading white space characters from string 
//from both side
// var a="          JavaScript     "
// var b=a.trim()
// console.log(a.length);
// console.log(b.length);
