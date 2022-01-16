/**
 Set: collection of Unique Elements
 */

//how to make a set
/*
var a=[10,20,30,40,50,50,60,60,60,60,50,70,80,90,100]
var b=new Set(a)
console.log(a);
console.log(b);
*/
//how to make a set using new Set()
// var a=new Set([10,20,30,40,50,50,60,60,60,60,50,70,80,90,100])
//console.log(a);

//add() used to add an item in set,do nothing if item already exist
// a.add(110)
// console.log(a);
// a.add(110)
// console.log(a);

//delete() used to delete any particular item from Set
//do nothing if delete is empty

// a.delete(50)
// console.log(a);
// a.delete()
// console.log(a);
//clear()   //remove all items from set
//console.log(a.size);
// a.clear()
// console.log(a);
//console.log(a);

// console.log(a.has(50));
// console.log(a.has(500));
//has() return true if item exist in set else return false
/*
    values:     return an iterator containing all items of set
    keys:       return an iterator containing all items of set
    entries:    return an iterator in pair if value,value 
                containing all items of set
 */

// console.log(a.values());
// console.log(a.keys());
// console.log(a.entries());

// for(let i of a.values()){
//     console.log(i);
// }
// for(let i of a.keys()){
//         console.log(i);
//     }
// for(let i of a.entries()){
//     console.log(i);
// }

//map: collection of item but in pair of key and value
//      keys must be unique but values may be duplicate
//if we use duplicate key in a map then only last key will used
//how to make a map

var a=new Map([
    ["Nitin",50000],
    ["Rahul",40000],
    ["Vinary",30000],
    ["Mukul",80000],
    ["Nitesh",90000],
    ["Nitin",10000],
])
console.log(a);

//set() of map insert an item in map and if key already exist then
//set() update keys value

// a.set("Mukul",120000)
// a.set("Nisha",10000)
// console.log(a);

//delete() used to delete any particular key from Map do nothing in case of Empty
// a.delete("Nitin")
// console.log(a);
// a.delete("Nitin")
// console.log(a);
//clear()   //used to delete all items from Map
// a.clear()
// console.log(a);

//a.size  //return number of items of Map
// console.log(a.size);

//has() : return true is map has an item else return false
// console.log(a.has("Nitin"));
// console.log(a.has("sumit"));
// console.log(a.has(10000));
/*
    values:     return an iterator containing all keys of map
    keys:       return an iterator containing all values of map
    entries:    return an iterator in pair if key,value 
                containing all items of map
 */
console.log(a.values());
console.log(a.keys());
console.log(a.entries());