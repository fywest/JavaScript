
var person = new Object();

person["firstname"]= "Tony";
person["lastname"] = "Alicea";

var firstnameProperty = "firstname";

console.log(person);
console.log(person[firstnameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St. ";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);

var Tony1 = { firstname: 'Tony1',
                lastname: 'Alicea1',
                address:{
                    street: "Main ST. ",
                    city:"New York",
                    state: "NY"
                }
            };
console.log(person);

function greet(person){
    console.log('Hi'+person.firstname);
}
greet(Tony1);

greet({firstname:'Mary',
        lastname:'Doe'
    }
    );

Tony1.address2 = {
    street: '333 Second St.'
}
console.log(Tony1);

//console.log(libraryName);
/* 
function greet(name){
    name = name || '<your name here>';
    console.log('Hello '+ name);
}
greet('Tony');
greet();
*/


/*
var a = 0;
var b = 1//0//false;

if(a == b){
    console.log('They are equal at === ')
    if(a === b){
        console.log('also they are equal at === ')//!==
    }else{
        console.log(' but they not equal at === ')
    }
}
else{
    console.log('the are not equal !')
}
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(0));

var c='he';
if(c){
    console.log('There is something');//c||c===0
} 

*/


/* 
var a = 3 + 4 ;
console.log(a);
var b = 3 > 4;
console.log(b);

var c = 1 + '2';
console.log(c);

console.log(1 < 2 < 3)
console.log(3 < 2 < 1)
console.log(Number(false))
*/


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