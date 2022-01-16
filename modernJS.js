/*
Event Propagation mode determines in which order the element
receive the event

1. Event Capturing: first parent to last child
2. Event Bubbling(default) : from last child to first parent
*/


//function currying
/*
function sum(num1){
    return function(num2){
        return function(num3){
            return function(num4){
                return function(num5){
                    console.log(num1+num2+num3+num4+num5);
                }
            }
        }
    }
}*/
// function sum(num1){return (num2)=>(num3)=>(num4)=>(num5)=>console.log(num1+num2+num3+num4+num5)
// }
// sum(10)(20)(30)(40)(50)


//CallBack Hell
/*
function display(){
    setTimeout(()=>{
        console.log("Hello World1");
        setTimeout(()=>{
            console.log("Hello World2");
            setTimeout(()=>{
                console.log("Hello World3");
                setTimeout(()=>{
                    console.log("Hello World4");
                    setTimeout(()=>{
                        console.log("Hello World5");
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}
display()
*/

//higher order functions and callback functions:
// var a=[13,61,22,48,1,65,251,15,65,45]
// function check(item){
//   return item%5==0
// }
// console.log(a.find(check));
// console.log(a.findIndex(check));
// console.log(a.map(check));
// console.log(a.filter(check));

/*
here find() findIndex() map() and filter() function are
higher Order function and check function is a callback function
 */ 

// function myfind(a,fun){
//     for(let i in a){
//         if(fun(a[i]))
//         return a[i]
//     }
//     return -1
// }
// function myfindIndex(a,fun){
//     for(let i in a){
//         if(fun(a[i]))
//         return i
//     }
//     return undefined
// }
// function mymap(a,fun) {
//     var arr=[]
//     for(let i in a){
//         arr.push(fun(a[i]))
//     }
//     return arr
// }
// function myfilter(a,fun) {
//     var arr=[]
//     for(let i in a){
//         if(fun(a[i]))
//         arr.push(a[i])
//     }
//     return arr
// }
// console.log(a.find(check));
// console.log(myfind(a,check));
// console.log(a.findIndex(check));
// console.log(myfindIndex(a,check));
// console.log(a.map(check));
// console.log(mymap(a,check));
// console.log(a.filter(check));
// console.log(myfilter(a,check));



/*
promise :  ->   a js object which link producing code with
                consuming code
           ->   promises are used to handle asynchronous operations
                in JS.
           ->   they are easy to manage when dealing with multiple
                asynchronous operations where callback can create
                call back hell leading to unmanagable code
producing Code : a code that can tak some time to execute
consuming Code : a code that must wait for the result

pomise State:
    1. Promise Produce
    2. Resolve
    3. Reject
*/

//producing code
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise p1 is Resolved")
        reject("Something Went Wrong in P1 Promise")
    },2000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise p2 is Resolved")
        reject("Something Went Wrong in p2 Promise")
    },4000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise p3 is Resolved")
        reject("Something Went Wrong in p3 Promise")
    },6000)
})
const p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise p4 is Resolved")
        reject("Something Went Wrong in p4 Promise")
    },8000)
})
const p5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise p5 is Resolved")
        reject("Something Went Wrong in p5 Promise")
    },10000)
})

//consuming code
// p1.then((msg)=>{
//     console.log(msg);
//     p2.then((msg)=>{
//         console.log(msg);
//         p3.then((msg)=>{
//             console.log(msg);
//             p4.then((msg)=>{
//                 console.log(msg);
//                 p5.then((msg)=>{
//                     console.log(msg);
//                 })
//                 .catch((error)=>{
//                     console.log(error);
//                 })
//             })
//             .catch((error)=>{
//                 console.log(error);
//             })
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// })
// .catch((error)=>{
//     console.log(error);
// })

//async\await and exception handling
async function sample(){
    try{ 
        console.log(await p1);
        try{
            console.log(await p2)
            try{
                console.log(await p3)
                try{
                    console.log(await p4)
                    try{
                        console.log(await p5);
                    }
                    catch(error){
                        console.log(error);
                    }
                }
                catch(error){
                    console.log(error)
                }
            }
            catch(error){
                console.log(error);
            }
        }
        catch(error){
            console.log(error)
        }
    }
    catch(error){
        console.log(error);
    }
}
sample().then(()=>{
    console.log("Done");
})