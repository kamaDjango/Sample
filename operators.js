/*
Operators:
some special symbols used to perform serveral predefine
operations on operands(identifier,constant i.e value)

Category of operators on basis of operands:
    1. Unary  :  required only one operand
    2. Binary :  required two operands
    3. Ternary : required three operands

Types:
    1. Arithmetic Operators
    2. Assignment Operator
    3. Composite/Compound/Short Hand Operators
    4. Relational Operators
    5. Logical Operators
    6. Bitwise Operators
    7. Conditional Operator
    8. Increment Operator
    9. Decrement Operator
 */
/*
Arithmetic Operators:
    +   Addition
    -   Subtraction
    *   Multiplication
    /   Division
    %   Remainder
    **  Power
    Type: Binary
    Precedence: L to R
    Priority:   1. Brackets
                2. **
                3. * / %
                4. + -
    Associativity:  L to R(in case of same priority)
 */
// console.log(10+20);             //30
// console.log("Hello"+"World");   //HelloWorld
// console.log(10+"World");        //10World
// console.log("Hello"+20);        //Hello20

// console.log(10-20);                 //-10
// console.log("Hello"-"World");       //NaN
// console.log(10-"World");            //NaN
// console.log("Hello"-20);            //NaN

// console.log(10/4);                  //2.5
// console.log("Hello"/"World");       //NaN
// console.log(10/"World");            //NaN
// console.log("Hello"/20);            //NaN

// console.log(10*4);                  //40
// console.log("Hello"*"World");       //NaN
// console.log(10*"World");            //NaN
// console.log("Hello"*20);            //NaN

// console.log(125**125);             

// var a=10*4/6*8%25-20/7*100%60+(9/3-3*2+21/3)/80%2**4
// console.log(a);
/*
10*4/6*8%25-20/7*100%60+(9/3-3*2+21/3)/80%2**4
10*4/6*8%25-20/7*100%60+(3-3*2+21/3)/80%2**4
10*4/6*8%25-20/7*100%60+(3-6+21/3)/80%2**4
10*4/6*8%25-20/7*100%60+(3-6+7)/80%2**4
10*4/6*8%25-20/7*100%60+(-3+7)/80%2**4
10*4/6*8%25-20/7*100%60+4/80%2**4
10*4/6*8%25-20/7*100%60+4/80%16
40/6*8%25-20/7*100%60+4/80%16
6.6*8%25-20/7*100%60+4/80%16
52.8%25-20/7*100%60+4/80%16
52.8%25-20/7*100%60+4/80%16
2.79-20/7*100%60+4/80%16
2.79-2.85*100%60+4/80%16
2.79-285%60+4/80%16
2.79-45+4/80%16
2.79-45+0.05
-42.21+0.05
-42.21+0.05
-42.16
*/
/*
Assignment Operator(=) 
used to assign value of RHS operand to LHS operand
eg. sum=a+b;    valid
eg. a+b=sum;    invalid
eg. a=b=c;      valid
Type: Binary
precedence: R to L
*/

/*
Composite/Compound/Short Hand Operator:
combination of assignment operator with other operators
a=a+b           a+=b
a=a-b           a-=b
a=a*b           a*=b
a=a/b           a/=b
a=a%b           a%=b
a=a**b          a**=b
 */

/*
Relational Operator 
<   Less then
<=  less Then Equal
>   Greater Then 
>=  Greater Then Equal
==  Equal   return true if both values are same 
=== Equal   return true if both values are same and same type
!=  not Equal return true if both values are not same
!== not Equal return true if both values are not same and 
    not same type
Type : Binary
precedence: L to R
*/
// a=5
// b="5"
// console.log(a<b);
// console.log(a<=b);
// console.log(a>b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);

/**
Logical Operator:
used to make a compund condition
Operator    Symbol  Operation             Type     Precedence 
Logical And &&      return true if all    Binary   L to R
                    conditions are true
                    else return false
Logical Or  ||      return true if Atleast Binary  L to R
                    one condition is true
                    else return false
Logical Not !       return true if        Unary    R to L
                    condition is False
                    and return False
                    if condition is true
 */

// console.log(10 && 20);              //20
// console.log(10 && 0);               //0
// console.log(0 && 20);               //0
// console.log(0 && 0);                //0
// console.log(true && true);          //true
// console.log(true && false);         //false
// console.log(false && true);         //false
// console.log(false && false);        //false
// console.log(10 && 20 && 30);        //30


// console.log(10 || 20);      //10
// console.log(10 || 0);       //10
// console.log(0 || 20);       //20
// console.log(0 || 0);        //0
// console.log(true || true);       //true
// console.log(true || false);       //true
// console.log(false || true);       //true
// console.log(false || false);      //false


/*
console.log(!10);
console.log(!0);
console.log(!true);
console.log(!false);
*/

/**
 * conditional Operator(?:) used when we have to execute
 * one statement out of two statements according to
 * condition
    Type: Ternary
syntax:
    condition?statement1:statement2;
  */
// var num=250
// num%2==0?console.log(num,"is Even"):console.log(num,"is Odd");

/*
*Bitwise Operators  
operator                symbols     Type    Precedence
1. Bitwise And          &           Binary  L to R
2. Bitwise Or           |           Binary  L to R
3. Bitwise Xor          ^           Binary  L to R
4. Bitwise Left Shift   <<          Binary  L to R
5. Bitwise Right Shift  >>          Binary  L to R
6. Bitwise Negation     ~,-         Unary   R to L

a   b   a&b     a|b     a^b(a|b - a&b)
0   0   0       0       0
0   1   0       1       1
1   0   0       1       1
1   1   1       1       0
a b c d  a^b^c^d
0 0 0 0  0
0 0 0 1  1
0 0 1 0  1
0 0 1 1  0
0 1 0 0  1
0 1 0 1  0
0 1 1 0  0
0 1 1 1  1
1 0 0 0  1
1 0 0 1  0
1 0 1 0  0
1 0 1 1  1
1 1 0 0  0
1 1 0 1  1
1 1 1 1  0
 */
// var a=40
// var b=50
// var c=a&b
// var d=a|b
// var e=a^b
// console.log(c);
// console.log(d);
// console.log(e);
/*
a=33    :   1   0   0   0   0   1
b=43    :   1   0   1   0   1   1
---------------------------------------
c=a&b   :   1   0   0   0   0   1
            32  16  8   4   2   1
            ---------------------
            32  0   0   0   0   1=>33
---------------------------------------
d=a|b   :   1   0   1   0   1   1
            32  16  8   4   2   1
            ---------------------
            32  0   8   0   2   1=>43
---------------------------------------
e=a^b   :   0   0   1   0   1   0
            32  16  8   4   2   1
            ---------------------
            0   0   8   0   2   0=>10
    /*
Bitwise Left Shift(<<):
    num<<n
i.e num*2**n
eg. 25<<5
i.e 25*2**5
i.e 25*32
i.e 800

Bitwise Right Shift(>>):
    num>>n
i.e num/2**n
eg. 25>>3
i.e 25/2**3
i.e 25/8
i.e 3
*/
/*
var a=25
var b=a<<5
var c=a>>3
console.log(b);
console.log(c);
*/

/**
 * Bitwise Negation Operator
                    ~       i.e ~x i.e -x-1
                +ve     10          -ve     -20

                -ve     -10         +ve     20
                -1       -1         -1      -1
                ------------------------------
                        -11                 19
                    -       i.e -x i.e -x
                +ve     10          -ve     -20

                -ve     -10         +ve     20
                ------------------------------
                        -10                 20
 */
// var a=10
// var b=-20
// console.log(~a);
// console.log(~b);
// console.log(-a);
// console.log(-b);

/**
 *                  Increment(++) i.e x=x+1
            Pre-Increment           Post-Increment
            (++operand)             (operand++)
            ------------------------------------
            First Increment         first Assignment
            then Assignment         then Increment

                    Decrement(--) i.e x=x-1
            Pre-Decrement           Post-Decrement
            (--operand)             (operand--)
            ------------------------------------
            First Decrement         first Assignment
            then Assignment         then Decrement
 */

// var a=10
// var b=a++       //b=10  a=11
// var c=++a       //a=12  c=12
// var d=a--       //d=12  a=11
// var e=--a       //a=10  e=10
// --a             //9
// a--             //8
// console.log(a,b,c,d,e)


// var a=10
// var b=a++ + ++a
// console.log(a,b);


// var a=10
// var b=a-- - a--
// console.log(a,b);


var a=10
var b=--a - a--
var c=a-- - --a + b-- - --b
console.log(a,b,c); 