const a=3+'3';
console.log(a);
console.log(typeof a);



const b= +'5';
console.log(b);
console.log(typeof b);


const c= true +1;
console.log(c);
console.log(typeof c);


// TYPE CONVERSION
const bool ='true';
console.log(typeof Boolean(bool))

const str ='56';
console.log(Number(str));

console.log(console);

// NOTE to log the erroe msg
console.error("hello");
//NOTE to log the warning msg
console.warn("hello");


// NOTE used to calculate the exection time for the code ;
console.time('ar');
const arr =[1,2,3,4];

console.log(arr);
console.timeEnd('ar');

//Note use script mode;
//firstname="Ravi";
//console.log(firstname);

//note non primitve type
//note array and object;

const ar=['string',true,23];

console.log(ar[0]);
console.log(ar[ar.length-1]);

//note array method;

//1 note push method;

//note add element to the end of the array;
const pushresult= ar.push('techno');
console.log(ar);
console.log(pushResult);

//2 note pop method;
const popResult=ar.pop();
console.log(ar);
console.log(popResult)

//3 note unshift method;
//note add element to the starting of the array;

const unshiftresult=ar.unshift(4);
console.log(ar);
console.log(unshiftresult);

//4 note shift method;
const shiftresult=ar.shift();
console.log(ar);
console.log(shiftresult);

//5 note includes;
const includesresult=ar.includes('string');
console.log(includesresult);