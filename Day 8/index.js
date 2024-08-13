let isfun= true;
console.log(typeof isfun);

//undrfined
let birthyear;
//Note null
let lastName=null;

console.log(typeof lastName);

//Note keywords used to declare variable in the js

//todo-var,let, const

//Note-Var

var department='cs';
department='mechanical';
console.log(department);

//Note-Let

let collage='Techno';
console.log(collage);

//let collage='git';cnnot redeclare;

//Note-Const;

//redeclaration of the varaiable name 
//let collage ='GIT'

//Note-Const
//Note in the case of the const we cannot reassing the value and not declare the variable name ;

const emoji='❌';
emoji='🚀';
console.log(emoji)//we get the error here;

//Note == and ==
//Note - loose equality and strict equality;

let a=5;
let b='5';
console.log(a==b);

//Note
//Template String

const firstName='abc';
const lastName2='xyz';
const collage2='Techno';

const fulldetails='my'+''+'name'+''+'is'+''+firstName
console.log(fulldetails)

//Note writing using template String;

const mydetails='my name is ${firstName}';
console.log(mydetails)