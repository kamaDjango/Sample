/*
Flow Control Statemnet:
1. Conditional Statement or Selection Statements
    1. if Statement
    2. if else Statement
    3. nested if else Statement
    4. if else if ladder Statement
    5. switch case Statement
2. Iteration Statemnets or Loops
    1. for Loop
    2. for in Loop
    3. for Of Loop
    4. while Loop
    5. do while Loop
    6. Nested Loops
3. Jump Statements:
    1. break Statement
    2. continue Statement
 */

/*
Conditional Statement:
1. if Statement:
    used when we have execute a statement block when condition is
    true
    syntax:
    if(condition){
        ------
        number of Statements
        ------
    }
 */
// if(false){
//     console.log("Line1");
//     console.log("Line2");
//     console.log("Line3");
// } 
// console.log("Line4");
// console.log("Line5");
// console.log("Line6");

/*
if else Statement: used when execution of one statement block out of
two statement blocks depend on a conditions
syntax:
if(condition){
    ------
    number of Statements block1//execute when condition is True
    ------
}
else{
    ------
    number of Statements block2//execute when condition is False
    ------
}
 */
// var num=25
// if(num%2==0)
// console.log(num,"is Even")
// else
// console.log(num,"is Odd")

/*
Nested if Else:
if else within if else
syntax:
if(condition1){
    ------
    if(condition2){
        -----
    }
    else{
        -----
    }
}
else{
    ------
    if(condition3){
        -----
    }
    else{
        -----
    }
}
 */

/*
var a=150
var b=65
var c=50
if(a<b){
    if(a<c)
    console.log(a,"is smallest");
    else
    console.log(c,"is smallest");
}
else{
    if(b<c)
    console.log(b,"is smallest");
    else
    console.log(c,"is smallest");
}
*/

/*
if else if ladder Statement:
used when we have n number of conditions
syntax:
if(condition1){
    -----
}
else if(condition2){
    -----
}
else if(condition3){
    -----
}
-
-
else if(conditionN){
    -----
}
else{
    -----
}
 */
/*
var a=15
var b=20
var c=30
var d=6
var e=25
if(a>=b && a>=c && a>=d && a>=e)
console.log(a,"is Greatest")
else if(b>=c && b>=d && b>=e)
console.log(b,"is Greatest")
else if(c>=d && c>=e)
console.log(c,"is Greatest")
else if(d>=e)
console.log(d,"is Greatest")
else
console.log(e,"is Greatest")
*/

/*
var ch='n'
if(ch>='a' && ch<='z'){
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
    console.log(ch,"is a lower case vowel")
    else
    console.log(ch,"is a lower case consonant")
}
else if(ch>='A' && ch<='Z'){
    if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
    console.log(ch,"is a upper case vowel")
    else
    console.log(ch,"is a upper case consonant")
}
else if(ch>='0' && ch<='9')
console.log(ch,"is Digit")
else if(ch==' ')
console.log(ch,"is Space")
else
console.log(ch,"is Special Character")
*/

/*
Switch case Statement:
used when we have to make a menu based program:
syntax:
switch(expression)
{
    case constant1:
        ------
        ------
        break
    case constant2:
        ------
        ------
        break
    case constant3:
        ------
        ------
        break
    -
    -
    -
    case constantN:
        ------
        ------
        break
    default:
        ------
        ------
}
 */
/*
var day=5
switch(day)
{
    case 1:
        console.log("Sunday");
        break
    case 2:
        console.log("Monday");
        break
    case 3:
        console.log("Tuesday");
        break
    case 4:
        console.log("Wednesday");
        break
    case 5:
        console.log("Thursday");
        break
    case 6:
        console.log("Friday");
        break
    case 7:
        console.log("Saturday");
        break
    default:
        console.log("Invalid Choice");
}
*/
var num=2
switch(num){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Month Has 31 Days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Month Has 30 Days");
        break;
    case 2:
        console.log("Month has 28/29 Days");
        break
    default:
        console.log("Invalid Choice");
}