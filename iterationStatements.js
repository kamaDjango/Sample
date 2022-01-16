/*
Iteration Statements: used to repeat number of statements N times
1. for Loop
2. for in Loop
3. for of Loop
4. while Loop
5. do while Loop
 */

/*
for Loop: used when we know number of Iterations
syntax:

for(Initialization;condition;updation)
{
    -------
    number of Statements
    -------
}
 */

// for(var i=1;i<=10;i++){
//     console.log(i,"Hello World");
// }
// for(var i=10;i>=1;i--){
//     console.log(i,"Hello World");
// }
// var i=1
// for(;;)
// {
//     if(i>10)
//     break
//     console.log(i,"Hello World")
//     i++
// }

// var num=15
// for(var i=1;i<=10;i++){
//     console.log(`${num} * ${i} = ${num*i}`);
//     //console.log(num,"*",i,"=",num*i);
// }

// var num=280     //6 28  496 8128
// var sum=0
// for(var i=1;i<=num/2;i++){
//     if(num%i==0)
//     sum=sum+i
// }
// if(sum==num)
// console.log(`${num} is Perfect Number`)
// else
// console.log(`${num} is not a Perfect Number`)

//fibonacci Series:0 1 1 2 3 5 8 13 21 34 55 89 144........
// var num=10
// var a=0
// var b=1
// var sum=a+b
// process.stdout.write(`${a}\t${b}`)
// for(i=3;i<=num;i++){
//     process.stdout.write(`\t${sum}`)
//     a=b
//     b=sum
//     sum=a+b
// }
// var num=parseInt(prompt("Enter the Number of Terms of Fibonacci Series :  "))
// var a=0
// var b=1
// var sum=a+b
// var msg=`${a}\t${b}`
// for(i=3;i<=num;i++){
//     msg=msg+`\t${sum}`
//     a=b
//     b=sum
//     sum=a+b
// }
// document.getElementById("sample").innerHTML=msg
/*  
i   =3  4   5   6   7   8   9   10  11
a   =0  1   1   2   3   5   8   13
b   =1  1   2   3   5   8   13  21
sum =1  2   3   5   8   13  21  34
op:0    1   1   2   3   5   8   13  21  34
*/

/*
While Loop: used when we have not a fix idea of number of Iterations
syntax:

Initialization
while(condition)
{
    -----
    -----
    number of Statements
    -----
    -----
    updation
}
 */
// var i=1
// while(i<=10)
// {
//     console.log(i,"Hello World");
//     i++;
// }

// var num=10000
// var a=0
// var b=1
// var sum=a+b
// process.stdout.write(a+" "+b+" ");
// while(sum<=num)
// {
//     process.stdout.write(sum+" ");
//     a=b
//     b=sum
//     sum=a+b
// }

// var num=1245
// var sum=0
// while(num!=0)           //1245  124     12      1          0
// {
//     var r=num%10        //5     4       2       1
//     sum=sum+r           //0+5=5 5+4=9   9+2=11  11+1=12
//     num=Math.floor(num/10)//124 12      1       0
// }
// console.log("sum of Digits =",sum);

// var num=1245
// var rev=0
// while(num!=0)           //1245      124         12          1               0
// {
//     var r=num%10        //5         4           2           1
//     rev=rev*10+r        //0*10+5=5  5*10+4=54   54*10+2=542 542*10+1=5421
//     num=Math.floor(num/10)//124     12          1           0
// }
// console.log("Reverse Number is =",rev);


/*
do while Loop: Exit Controlled Loop
syntax:
Initialization
do
{
    ----
    number of Statements
    ----
    ----
    updation/Initialization
}while(condition);
 */
// var i=1
// do{
//     console.log(i,"Hello World");
//     i++;
// }while(i<=10);

/*
Nested Loops: Loops within Loops:
 */
for(let num=1;num<=20;num++){
    console.log("Table of ",num,"is");
    for(let i=1;i<=10;i++){
        console.log(num,"*",i,"=",num*i);
    }
}