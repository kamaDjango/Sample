/**
 *  oops:
 *  -> designed by Bjarne Stroustroup(C++ Founder)
 *  -> object oriented programming Structure
    oops is a computer science term which defines a well
    structured series or steps to construct a computer
    application which composed of multiple objects,
    each object can handle data, get and transfer 
    messages to each other, since objects are not
    dependent on each other oops is seen as being
    more flexible then procedural approach

    OOPS Approachs:
    1. Abstraction  :   Data Hiding
    2. Encapsulation:   Binding data and function in a single unit
    3. Polymorphism :   Many forms of Single Entity
    4. Inheritace   :   Code Reusability

    class is required to implement oops

    class: class is a technique by which we can define a new
           data type as we required

           class is a blue print of objects

           class is a collection of properties and behaviours
           where properties means variables of different-different
           data types and behaviors means various functions
    syntax:
    class{
        constructor(){
            ----
        }
        method1(){
            ----
        }
        method2(){
            ----
        }
        --
    }
 */ 
//class without constructor
/*
class Sample{
    display(){
        console.log("In display function of Sample class");
    }
    show(){
        console.log("In show function of Sample class");
    }
}
var obj = new Sample()
obj.display();
obj.show()
*/
/*
class Employee{
    get(eid,name,dsg,salary,city,state){
        this.eid = eid
        this.name = name
        this.dsg = dsg
        this.salary = salary
        this.city = city
        this.state = state
    }
    display(){
        console.log("--->>>> Employee Details <<<<<--------");
        console.log("Employee Id     :   ",this.eid);
        console.log("Name            :   ",this.name);
        console.log("Designation     :   ",this.dsg);
        console.log("Salary          :   ",this.salary);
        console.log("City            :   ",this.city);
        console.log("State           :   ",this.state);
    }
}
var e1 = new Employee()
e1.get(101,"Nitin Chauhan","Trainer",50000,"Noida","UP")
var e2 = new Employee()
e2.get(102,"Ankit Mishra","Trainer",20000,"Noida","UP")
var e3 = new Employee()
e3.get(103,"Tarun Thakur","Trainer",30000,"Noida","UP")
e1.display()
e2.display()
e3.display()
*/
/*
    class with constructor    
    Polymorphism:many forms of single entity
    
    constructor: -> a special method\function of class which 
                    provide memory initialization to a class
                    object
                 -> it does not return any value
                 -> there is no need to call a constructor
                    it called automatically when object is
                    declared
                 -> if we not provide initialization to a 
                    constructor compiler implicitly declare 
                    a constructor
                 -> we have to use constructor keyword to make a
                    constructor
*/
/*
class Sample{
    constructor(){
        console.log("Constructing class Sample");
    }
    display(){
        console.log("In display function of Sample class");
    }
    show(){
        console.log("In show function of Sample class");
    }
}
var obj = new Sample()
obj.display();
obj.show()
*/
/*
class Employee{
    constructor(eid,name,dsg,salary,city,state){
        this.eid = eid
        this.name = name
        this.dsg = dsg
        this.salary = salary
        this.city = city
        this.state = state
    }
    display(){
        console.log("--->>>> Employee Details <<<<<--------");
        console.log("Employee Id     :   ",this.eid);
        console.log("Name            :   ",this.name);
        console.log("Designation     :   ",this.dsg);
        console.log("Salary          :   ",this.salary);
        console.log("City            :   ",this.city);
        console.log("State           :   ",this.state);
    }
}
var e1 = new Employee(101,"Nitin Chauhan","Trainer",50000,"Noida","UP")
var e2 = new Employee(102,"Ankit Mishra","Trainer",20000,"Noida","UP")
var e3 = new Employee(103,"Tarun Thakur","Trainer",30000,"Noida","UP")
e1.display()
e2.display()
e3.display()
*/

/**
 * Inheritance:
 * oops approach provide a feature to reuse all members
 * of any previous existing class in a new class
 * 
 * eg. if a class named B inherit class A then class
 * B can reuse all member of class A so class B
 * is called child class,derived class or subclass
 * and class A is called parent class,super class
 * or base class
 * 
 * types:
 *  1. Single Inheritance
 *  2. Multilevel Inheritance
 *  3. Hierarchical Inheritance
 * 
 * syntax:
 *  class Parent{
 *  ----
 *  -----
 *  }
 *  class Child extends Parent{
 *      ----
 *      ----
 * }
 * Note: a child can access only those member of class
 * parent which child doesn't have
 * Note: if we define a constructor in parent class then in
 *       child class we have to call super function in child class
 *       constructor
 */
/*
class Parent{
    display(){
        console.log("In display function of Parent Class");
    }
    sample1(){
        console.log("In sample1 function of Parent Class");
    }
}
class Child extends Parent{
    display(){
        console.log("In display function of Child Class");
    }
    sample2(){
        console.log("In sample2 function of Child Class");
    }
}
var x=new Child()
x.display()
x.sample1()
x.sample2()
*/
/*
class Parent{
    constructor(){
        console.log("Constructing class Parent");
    }
    display(){
        console.log("In display function of Parent Class");
    }
    sample1(){
        console.log("In sample1 function of Parent Class");
    }
}
class Child extends Parent{
    constructor(){
        super()
        console.log("Constructing class Child");
    }
    display(){
        console.log("In display function of Child Class");
    }
    sample2(){
        console.log("In sample2 function of Child Class");
    }
}
var x=new Child()
x.display()
x.sample1()
x.sample2()
*/
//Single Inheritance: when a single child class inherit a 
//single parent class
/*
class Parent{
    get(x,y){
        this.a=x
        this.b=y
    }
}
class Child extends Parent{
    display(){
        this.sum=this.a+this.b
        console.log(this.a,"+",this.b,"=",this.sum);
    }
}
var obj=new Child()
obj.get(10,20)
obj.display()
*/
//mulilevel Inheritance: when a child class inherit another child class
/*
class Parent{
    constructor(){
        this.a=[10,20,30,40,50,60,70,80,90,100]
    }
}
class Child extends Parent{
    display(){
        for(let i=0;i<this.a.length;i++){
            process.stdout.write(this.a[i]+"\t");
        }
        console.log();
    }
}
class Child2 extends Child{
    reverse(){
        let i=0
        let j=this.a.length-1
        while(i<j)
        {
            let temp = this.a[i]
            this.a[i]=this.a[j]
            this.a[j]=temp
            i++
            j--
        }
    }
}
var obj =new Child2()
console.log("Array Elements are");
obj.display()

obj.reverse()
console.log("Reversed Array Elements are");
obj.display()
*/
//Hierarchical Inheriatnce: when a single parent class inherit by
//              more then one child class

class Sample{
    get(a,b){
        this.a=a
        this.b=b
    }
}
class Add extends Sample{
    display(){
        this.sum=this.a+this.b
        console.log(this.a,"+",this.b,"=",this.sum);
    }
}
class Sub extends Sample{
    display(){
        this.sub=this.a-this.b
        console.log(this.a,"-",this.b,"=",this.sub);
    }
}
class Mul extends Sample{
    display(){
        this.mul=this.a*this.b
        console.log(this.a,"*",this.b,"=",this.mul);
    }
}
class Div extends Sample{
    display(){
        this.div=this.a/this.b
        console.log(this.a,"/",this.b,"=",this.div);
    }
}
var a=new Add()
a.get(10,20)

var b=new Sub()
b.get(10,20)

var c=new Mul()
c.get(10,20)

var d=new Div()
d.get(10,20)

a.display()
b.display()
c.display()
d.display()