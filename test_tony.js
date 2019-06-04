var a = 3 + 4 ;
console.log(a);
var b = 3 > 4;
console.log(b);

var c = 1 + '2';
console.log(c);

console.log(1 < 2 < 3)
console.log(3 < 2 < 1)
console.log(Number(false))
/*primitive
undefined, null, boolean, number, string, symbol
*/
/* 
//long runing function
function waitThreeSeconds(){
    var ms= 3000 + new Date().getTime();
    while (new Date() < ms){
        console.log('finished funciton');
    }
}

function clickHandler(){
    console.log('click event!');
}

//listen for the click event
document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log('finnish exection');

*/

/* 

function b(){
    var myVar;
    console.log(myVar);
}

function a(){
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a()
console.log(myVar);

 */


/* 
var a;
a="hello";
if (a === undefined){
    console.log("a is undefined");
}
else{
    console.log("a is defined");
}
*/


/* 
b();
console.log(a);
var a = 'Hello World!';
function b(){
    console.log('Called b!');
}

*/



// 38 min

/*  
var Address = {
    Street: 'Main',
    Number: 100
}
var Apartment={
    Floor: 3,
    Number:301
}

var Address_object={
    Address,
    Apartment
};

console.log(Address_object);
*/