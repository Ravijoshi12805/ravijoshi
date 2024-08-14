let isfun = true;
console.log(typeof isfun);

// undefined
let birthyear;

// NOTE null

let lastName = null;

console.log(typeof lastName);


// NOTE keywords used yo declare variables in the js

// TODO  - var , let , const

// NOTE - VAR

var department ='cs';
department ='mechanical';
console.log(department)

//declartion
var department ='civil';
console.log(department);

// NOTE - LET

// let college ='TECHNO' ;
// console.log(college);

//let college='git';   cannot redeclare ;


//NOTE - CONST;

// const emoji ='👍';
// emoji ='👌';
// console.log(emoji) // we get the error here


let a=5;
let b='5'
console.log(a==b); // true
console.log(a===b);  // false

//NOTE 

let agee = 2024-2000
console.log(agee);


// NOTE
//template String

const firstName = 'Ravi';
const surName='Joshi';
const college ='TECHNO';
const fulldetails ='my' + firstName+surName+college;
console.log(fulldetails);

const mydetails =`my name is ${firstName} ${surName}`
console.log(mydetails);



// NOTE
// NOTE TRUTHY = those values which are not empty string ' '  and 0
// NOTE  falsy values =0, null , undefined, NaN , '' , false

if('') {
    console.log('Zero is not a falsy value');
} else {
    console.log('Zero is a falsy value');
}


// NOTE types of function
// NOTE function declarartion

// function declarations are hoisted ;
// we can call the function declarations before declaring it 
const d = fulldetailss('abc' ,'xyz')
 console.log(d);
console.log(window);


//function declarartion
function fulldetailss(firstName , surName){
    return`my name is ${firstName} ${surName}`
}

// function calling
 const c = fulldetailss('abc' ,'xyz')
 console.log(c);

// NOTE  function expression
//  if we are using let and const to declare variable and we are excessing them before initailizing the value in them those are in temporal dead zone


let summ =function(a,b) {
    return a+b
}


console.log(summ(1,2));
// NOTE arrow function;