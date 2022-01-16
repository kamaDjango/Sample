/*
  Array: 
    -> collection of items arrangement in contiguous order
    -> can contain duplicate items
    -> can contain differnt type value


    Note: Array index always start with ZERO
    syntax:
    var arrayObject=[item1,item2,item3,....,itemN]
 */

//1st type to create an array using array literal style

/*
var a=[10,20,30,40,50,60,70,80,90,100]
console.log(a[0]);
console.log(a[1]);
console.log(a);
*/

//2nd type to create an array using empty array

/*
var a=[]
a.push(10)
a.push(20)
a.push(30)
a.push(40)
a.push(50)
a.push(60)
a.push(70)
a.push(80)
a.push(90)
a.push(100)
console.log(a);
*/

/*
var num=parseInt(prompt("Enter the Number of Elements of Array :"))
var a=[]
for(let i=1;i<=num;i++){
  data = parseInt(prompt("Enter the Item number "+i+" : "))
  a.push(data)
}
console.log("Array Elements are : ",a);
*/

//3rd type : Array constructor
/*
var a=new Array(10,20,30,40,50,60,70,80,90,100)
console.log(a,typeof(a));
*/

//4th type : Array constructor and use input
/*
var num=parseInt(prompt("Enter the Number of Elements of Array :"))
var a=Array()
for(let i=1;i<=num;i++){
  data = parseInt(prompt("Enter the Item number "+i+" : "))
  a.push(data)
}
console.log("Array Elements are : ",a);
*/


//toString convert an array into string and use , as separator
/*
var a=[10,20,30,40,50,60,70,80,90,100]
var b=a.toString()
console.log(a,typeof(a));
console.log(b,typeof(b));
*/
/*
join() convert an array into string and you can specify
       seperator,bydefault join function use , as seperator
*/
/*
var a=[10,20,30,40,50,60,70,80,90,100]
var b=a.join()
var c=a.join(" ")
var d=a.join(":")
var e=a.join("|")
console.log(a,typeof(a));
console.log(b,typeof(b));
console.log(c,typeof(c));
console.log(d,typeof(d));
console.log(e,typeof(e));
*/

//Array Destructuring
/*
  var emp=[101,"Nitin Chauhan","Trainer",45000,"Noida","UP"]
  console.log(emp[0]);
  console.log(emp[1]);
  console.log(emp[2]);
  console.log(emp[3]);
  console.log(emp[4]);
  console.log(emp[5]);
*/

// var [id,name,dsg,salary,city,state]=emp
// console.log(id);
// console.log(name);
// console.log(dsg);
// console.log(salary);
// console.log(city);
// console.log(state);

/*
array: push() pop() shift() unshift() splice() delete
push() : used to insert a new item in the last of an array and
         return updated length of an array after insertion
pop()  : used to delete an item from the last position and 
         return that deleted item
unshift() : used to insert a new item in the very first index
            of an array and return updated length of an array
            after insertion,this function shift all item rigth
            side 1 position befor insertion
shift()  : used to delete an item from the first position and 
           return that deleted item,after delettion shift all
          items  to the left side one position

splice() : used to insert or delete item from user's Specific
           position, and return deleted items
1. to insert one or more new items in mid of an array
array.splice(pos,number_of_items_to_delete,item1,item2,item3,..)

2. to delete items 
array.splice(pos,number_of_items_to_delete)


delete: used to delete any item but it left an empty space
*/

/*
var a=[10,20,30,40,50]
console.log(a);
console.log(a.push(60));
console.log(a);
console.log(a.pop());
console.log(a);
console.log(a.unshift(5));
console.log(a);
console.log(a.shift());
console.log(a);
a.splice(3,0,100,200,300,400,500)
console.log(a);
console.log(a.splice(3,3));
console.log(a);
delete a[2]
console.log(a);
*/

//slice() return a list of items from pos to pos
/*
var a=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]
console.log(a.slice(5,10));
console.log(a.slice(5));
console.log(a.slice(-5));
*/

/*
concat() : concate merge one or more arrays in a single array
           and it return new array and doesn't update any 
          previous array
*/

/*
var a=[10,20,30,40,50]
var b=[60,70,80,90,100]
var c=["Nitin","Ankit","Aman","Naman"]
var d=a.concat(b)
var e=a.concat(b,c)
console.log(a);
console.log(b);
console.log(d);
console.log(e);
*/

//accessing array elements using entries()
//accessing array elements using normal for loop
//accessing array elements using while loop
//accessing array elements using do while loop
//accessing array elements using for of loop
//accessing array elements using for in loop
// for Loop
/*
var a=[10,20,30,40,50,60,70,80,90,100];
for(let i=0;i<a.length;i++){
  console.log(a[i]);
}
*/
// for in Loop : return index of items in variable one by one
/*
var a=[10,20,30,40,50,60,70,80,90,100];
for(let i in a){
  console.log(a[i]);
}
*/

// for of Loop : return items in variable one by one
/*
var a=[10,20,30,40,50,60,70,80,90,100];
for(let i of a){
  console.log(i);
}
*/

//while Loop
/*
var a=[10,20,30,40,50,60,70,80,90,100];
let i=0
while(i<a.length){
  console.log(a[i]);
  i++;
}
*/

//do while Loop
/*
var a=[10,20,30,40,50,60,70,80,90,100];
let i=0
do{
  console.log(a[i]);
  i++;
}while(i<a.length);
*/
//entries() generate an iterator which contains key and value of items
// var a=[10,20,30,40,50,60,70,80,90,100];
// var b=a.entries()
// for(let i of b){
//   console.log(i);
// }

//higher order function: those function which recieve a call back
//                         function as arguments

//find()  : return the item from array which pass a text
//findIndex():retunn the index of item from array which pass a test
//map()   : return an array of containg result for all elements of array
//filter(): return an array of items that pass a test
/*
var a=[15,45,65,95,81,10,25,20,216,20,30]
function check(data){
  return data%2==0
}
console.log(a.find(check));
console.log(a.findIndex(check));
console.log(a.map(check));
console.log(a.filter(check));
*/

//includes() return true if array conatins an item else retur false
//indexOf()  return lowest index of item from array and return -1
//            if item not found in Array
//lastIndexOf()  return highest index of item from array and
//               return -1 if item not found in Array
/*
var a=[10,20,30,40,40,40,50,60,40,40,40,50,50]
console.log(a.includes(60));
console.log(a.includes(600));
console.log(a.indexOf(40));
console.log(a.indexOf(400));
console.log(a.lastIndexOf(40));
console.log(a.lastIndexOf(400));
*/

//reverse()
/*
var a=[10,20,30,40,50,60,70,80,90,100]
a.reverse()
console.log(a);
*/
//sort()

//var a=["Nitin","Amit","Mohit","Sumit","Rahul","Varun"]
var a=[100,45,15,62,48,95,15,5,9,52,1000,25,4,56,5]
console.log(a)

// function check(x,y){
//     return x-y;
// }

// var check=function(x,y){
//   return x-y;
// }

// var check = (x,y)=>x-y;
// a.sort(check)
// console.log(a)

a.sort((x,y)=>x-y)
console.log(a)
