// console.log("Hello World");

/*
    JS Basics:
        1. Keywords:     reserved words
        abstract	arguments	await*	boolean
        break	byte	case	catch
        char	class*	const	continue
        debugger	default	delete	do
        double	else	enum*	eval
        export*	extends*	false	final
        finally	float	for	function
        goto	if	implements	import*
        in	instanceof	int	interface
        let*	long	native	new
        null	package	private	protected
        public	return	short	static
        super*	switch	synchronized	this
        throw	throws	transient	true
        try	typeof	var	void
        volatile	while	with	yield

        2. Identifiers:
            names of programming Entities like variables,functions,
            objects,class etc
        
            Rules for Identifiers:
            1. We can't use any keyword as Identifiers
            2. We can't use Digit as prefix but we can use digit as
                postfix
            3. We can't use any special character except underScore(_)
            4. We can't same name for more then one identifier in same
                statement block
        3. Data Types:
            Number: 10 15.5 65 -25
            String: collection of Characters 'sample' "Example"
            boolean: true false
            --------------------------------------------------
            null
            undefined
            array
            object
            bigint
        4. Variables: used when informatin is not fixed
            variable is a name of memory location in RAM which contains
            some information
            or variables are placeholders for DATA in RAM
            or variables are data containser
            syntax:
            var variableName=value; //function level
            let variableName=value; //block level
            const variabkeName=value;//block level//read only
        5. Constant: a constant or literal
        6. Tokens
        7. Input/Output Instructions
        8. Operators
 */
// var a=10;
// var b=12.35;
// var c=true;
// var d=false;
// var e='Hello';
// var f="World";
// console.log(a,typeof(a));
// console.log(b,typeof(b));
// console.log(c,typeof(c));
// console.log(d,typeof(d));
// console.log(e,typeof(e));
// console.log(f,typeof(f));


/*
    Tokens:
    smallest Entity of any program like keywords,identifiers,
    operator, constants and punctuators(, space ; [] () {} etc)
    etc

    var a=10;   //Statement
    tokens:
    var     keyword
    a       identifier
    =       operator
    10      constant
    ;       punctuator

    tokens
    
    collection of tokens(statement)

    collection of Statements(Program)

    collection of Programs(software)
 */

/*
    Output Instruction:
    console.log()          : used to print a message or value of
                            any variable on output screen
                            or mulitple
                            messages combined and log change 
                            line bydefault
    process.stdout.write() : used to print a message 
                             and it does not change 
                             line bydefault
 */
// console.log("Hello")
// console.log("World")

// process.stdout.write("Hello");
// process.stdout.write("World");

// var a=10;
// var b=20;
// console.log(a,b);
//process.stdout.write(a,b); //it does not work
//process.stdout.write(a);     //it does not work


// var a=10
// var b=20
// var sum=a+b
// console.log(a,"+",b,"=",sum)
// console.log(a+" + "+b+" = "+sum)
// console.log(`${a} + ${b} = ${sum}`)

// var p=65000
// var r=15.65
// var t=5
// var si=p*r*t/100
// console.log("Simple Interest = ",si);

var p=65000
var r=15.65
var t=5
var si=p*r*t/100
var total=p+si
var emi=total/(t*12)
console.log("Principal Amount = ",p);
console.log("Rate             = ",r);
console.log("Time             = ",t);
console.log("Simple Interest  = ",Math.round(si));
console.log("Final Amount     = ",Math.round(total));
console.log("EMI              = ",Math.round(emi));
