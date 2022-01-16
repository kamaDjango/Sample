//objects store information in pair of keys and values
//Note: Keys must be unique values may be duplicate
//object literal 
/*
var emp={
    eid : "Ducat101",
    name : "Nitin Chauhan",
    dsg : "Trainer",
    salary : 50000
}
// console.log(emp);
console.log(emp.eid);
console.log(emp.name);
console.log(emp.dsg);
console.log(emp.salary);
*/

// //Empty object literal 
/*
var emp={}
emp.eid ="Ducat101"
emp.name="Nitin Chauhan"
emp.dsg="Trainer"
emp.salary=50000
console.log(emp);
*/

//new Object() 
/*
var emp = new Object()
emp.eid ="Ducat101"
emp.name="Nitin Chauhan"
emp.dsg="Trainer"
emp.salary=50000
console.log(emp,typeof(emp));
*/

//Accessing Object Values with help of keys
// var emp={
//     eid : "Ducat101",
//     name : "Nitin Chauhan",
//     dsg : "Trainer",
//     salary : 50000
// }
// console.log(emp.name);
// console.log(emp["name"]);

//Accessing Object values through Loop 

// for(let i in emp){
//     console.log(i,"=",emp[i]);   
// }

//adding an item to existing object
// console.log(emp);
// emp.email="Vishankchauhan@gmail.com"
// console.log(emp);

//deleting object item
// delete(emp.name)
// console.log(emp);

//updating object value
// console.log(emp);
// emp.name="N Chauhan"
// console.log(emp);

//Nesting of Objects
// var emp = {
//     eid : "Ducat101",
//     name : "Nitin Chauhan",
//     dsg : "Trainer",
//     salary : 50000,
//     address : {
//         house : "82k",
//         street : 5,
//         village : "Mahawatpur",
//         pin : 121002,
//         city : "Faridabad",
//         state : "Harayana"
//     },
//     subject : ["Python","PHP","Mern","Mean"] 
// }
// console.log(emp);
// console.log(emp.address);
// console.log(emp.address.city);
// console.log(emp.subject);
// console.log(emp.subject[0]);


//function in Objects

//Ordinary function
// var emp={
//     eid : "Ducat101",
//     name : "Nitin Chauhan",
//     dsg : "Trainer",
//     salary : 50000,
//     display(){
//         console.log("Eid    :  ",this.eid);
//         console.log("Name   :  ",this.name);
//         console.log("Dsg    :  ",this.dsg);
//         console.log("Salary :  ",this.salary);
//     }
// }
// emp.display()


//anonymous function
// var emp={
//     eid : "Ducat101",
//     name : "Nitin Chauhan",
//     dsg : "Trainer",
//     salary : 50000,
//     display : function(){
//         console.log("Eid    :  ",this.eid);
//         console.log("Name   :  ",this.name);
//         console.log("Dsg    :  ",this.dsg);
//         console.log("Salary :  ",this.salary);
//     }
// }
// emp.display()

//fat arrow function: Note this is not used in fat arrow use object name
// var emp={
//     eid : "Ducat101",
//     name : "Nitin Chauhan",
//     dsg : "Trainer",
//     salary : 50000,
//     display : function(){
//         console.log("Eid    :  ",this.eid);
//         console.log("Name   :  ",this.name);
//         console.log("Dsg    :  ",this.dsg);
//         console.log("Salary :  ",this.salary);
//     }
// }
// emp.display()

//fat arrow function: Note this is not used in fat arrow use object name
// var emp={
//     eid : "Ducat101",
//     name : "Nitin Chauhan",
//     dsg : "Trainer",
//     salary : 50000,
//     display : ()=>{
//         console.log("Eid    :  ",emp.eid);
//         console.log("Name   :  ",emp.name);
//         console.log("Dsg    :  ",emp.dsg);
//         console.log("Salary :  ",emp.salary);
//     }
// }
// emp.display()

//getter and setter
//get
// var emp={
//     eid : "Ducat101",
//     name : "Nitin Chauhan",
//     dsg : "Trainer",
//     salary : 50000,
//     get display(){
//         console.log("Eid    :  ",emp.eid);
//         console.log("Name   :  ",emp.name);
//         console.log("Dsg    :  ",emp.dsg);
//         console.log("Salary :  ",emp.salary);
//     }
// }
// emp.display

//set
// var emp={
//     set setvalue(data){
//         this.eid=data[0]
//         this.name=data[1]
//         this.dsg=data[2]
//         this.salary=data[3]
//     },
//     get display(){
//         console.log("Eid    :  ",emp.eid);
//         console.log("Name   :  ",emp.name);
//         console.log("Dsg    :  ",emp.dsg);
//         console.log("Salary :  ",emp.salary);
//     }
// }
// var data=["Ducat101","Nitin Chauhan","Trainer",50000]
// emp.setvalue=data
// emp.display    

//object destructuring
// var EmployeeRecord = {
//     eid : "Ducat101",
//     name : "Nitin Chauhan",
//     dsg : "Trainer",
//     salary : 50000,
//     address : {
//         house : "82k",
//         street : 5,
//         village : "Mahawatpur",
//         pin : 121002,
//         city : "Faridabad",
//         state : "Harayana"
//     },
//     subject : ["Python","PHP","Mern","Mean"] 
// }
// var {eid,name,dsg,salary,address,subject}=EmployeeRecord
// console.log(eid);
// console.log(name);
// console.log(dsg);
// console.log(salary);
// console.log(address);
// console.log(subject);

//object constructor
// function Employee(eid,name,dsg,salary){
//     this.eid=eid
//     this.name=name
//     this.dsg=dsg
//     this.salary=salary
//     this.display=function(){
//         console.log("Eid    :  ",this.eid);
//         console.log("Name   :  ",this.name);
//         console.log("Dsg    :  ",this.dsg);
//         console.log("Salary :  ",this.salary);
//     }
// }
// var emp1=new Employee("Ducat101","Nitin Chauhan","Trainer",50000)
// var emp2=new Employee("Ducat102","Naman Sharma","Trainer",80000)
// var emp3=new Employee("Ducat103","Rahul Singh","Trainer",75000)
// emp1.display()
// emp2.display()
// emp3.display()
// console.log(typeof(emp1),typeof(Employee));


//object prototype
//need of object property
// function Employee(eid,name,dsg,salary){
//         this.eid=eid
//         this.name=name
//         this.dsg=dsg
//         this.salary=salary
// }
// var emp1=new Employee("Ducat101","Nitin Chauhan","Trainer",50000)
// var emp2=new Employee("Ducat102","Naman Sharma","Trainer",80000)
// var emp3=new Employee("Ducat103","Rahul Singh","Trainer",75000)
// Employee.city="Noida"
// console.log(emp1.city);
//solution

function Employee(eid,name,dsg,salary){
    this.eid=eid
    this.name=name
    this.dsg=dsg
    this.salary=salary
}
var emp1=new Employee("Ducat101","Nitin Chauhan","Trainer",50000)
var emp2=new Employee("Ducat102","Naman Sharma","Trainer",80000)
var emp3=new Employee("Ducat103","Rahul Singh","Trainer",75000)
Employee.prototype.city="Noida"
console.log(emp1.city);
console.log(emp2.city);
console.log(emp3.city);
