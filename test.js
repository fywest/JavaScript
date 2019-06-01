console.log("hello world")
var number = 5;// in-line comment
/*
data type
*/
var myName = "Beau";
myName = 8;
let ourName = "freeodeCamp";
const pi = 3.14;
var a;
var b = 2;
a = 7;
b = a;
console.log(a);
a += 12;
console.log(a);
//alert("no hello")
var sum = 10 + 10;//+-*\
console.log(sum);
sum++;
console.log(sum);
var remainder;
remainder = 11 % 3;
console.log(remainder);
var myName = "Jennifer";
console.log(myName);
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
var myLink = '<a href="http://www.example.com" target="_blank">Link</a>'
console.log(myLink);
/***
 code output \' single quote \" double quote \\backslash
 \n new line  \r tab \b backspace \f form feed
 */
myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);
myStr = "This is the start. " + "This is the end. ";
myStr += "This is the third. ";
myStr += "\n" + myLink;
console.log(myStr);
//************30 minutes */
console.log("myStr length is " + myStr.length)
console.log("myStr first letter is " + myStr[0])
console.log("myStr last letter is " + myStr[myStr.length - 1])

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    var space = " ";
    result += "The " + myAdjective + space + myNoun + space + myVerb + " to the store.";
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

var myArray = [myName, 1];
var ourArray = ["Mara", 9];
var nestArray = [myArray, ourArray]
console.log(myArray);
console.log(ourArray);
console.log(nestArray);
var dataArray = [50, 60, 70]
var myData = dataArray[0]
console.log(myData)
dataArray[0] = 55;
console.log(dataArray)

myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]
console.log(myArray[2][1])

ourArray = ["Stimpson", "J", "cat"];
ourArray.push("dog");
ourArray.push(nestArray);
console.log(ourArray);
ourArray.pop();
console.log(ourArray);
ourArray.shift();
console.log(ourArray);
ourArray.unshift("Happy");
console.log(ourArray);



function resuableFunction() {
    console.log("hi world");
}
resuableFunction();

function resuableFunctionArgs(a, b) {
    console.log(a - b);
}
resuableFunctionArgs(10, 5);



var myGlobal = 10;
function fun1(){
    var oopsGlobal = 5;
}
function fun2(){
    var output = "";
    console.log(typeof myGlobal);
    console.log(typeof oopsGlobal);

    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    output += "\n";
    if(typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

var outerWear = "T_Shirt";
function myOutfit(){
    var outerWear = "sweater";

    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(10));

function addThree(){
    sum = sum +3;
}
console.log(sum)

function nextInLine(arr, item){
    arr.push(item);

    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function ourTrueOrFalse(isItTrue){
    if(isItTrue){
        return "Yes, it's true";
    }
    return "No, it's false"
}
ourTrueOrFalse(true);
console.log(ourTrueOrFalse(false));

function testEqual(val){
    if(val == 12){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

function testStrictEqual(val){
    if(val === 12){
        return "strictEqual";
    }
    return "Not strict Equal";
}
console.log(testStrictEqual('12'));
console.log(testStrictEqual(12));

//== != > < >= <=
//strict === !== 
function compareEqual(a,b){
    if(a == b){
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEqual(10,"10"));


val = 30
if (val <=50 && val >=25){
    console.log("between 50 and 25");
}
val = 20
if (val  <25 || val >50){
    console.log("not between 50 and 25");
}

val = 40
if (val <=50 && val >=25){
    console.log("between 50 and 25");
} else{
    console.log("not between 50 and 25");
}

val = 20
if (val  <25){
    console.log("less than 25");
}else if (val >50){
    console.log("great than 50");
}
else{
    console.log("between 25 and 50")
}

var names=["Hole-in-one","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home","wrong value"];
function golfScore(par, strokes){
    if(strokes ==1){
        return 0
    }
    else if(strokes <= par-2){
        return 1
    }    else if(strokes == par-1){
        return 2
    }
    else if(strokes == par){
        return 3
    }
    else if(strokes == par+1){
        return 4
    }
    else if(strokes == par+2){
        return 5
    }
    else if(strokes >= par+3){
        return 6
    }
    else{
        return 7
    }
    //return "Change Me"
}
console.log(names[golfScore(5,5)])

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
            answer="gamma";
            break;
        case 4:
            answer="delta";
            break;
        case 5:
        case 6:
        case 7:
            answer="group-567";
            break;
        default:
            answer="something else";
            break;
    }
    return answer;
}
console.log(caseInSwitch(4));

function isLess(a,b){
    return a<b;
}
console.log(isLess(3,4));

//1:50 min object

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "the drink": "water"
};
console.log(ourDog);
console.log(ourDog.name);
ourDog.name="Happy Camper"
console.log(ourDog.name);
console.log(ourDog["the drink"]);
ourDog.bark="wow wow"
delete ourDog.bark;
console.log(ourDog);

function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "adelta" : "Denver",
        "echo" : "Easy",
        "foxtrot" : "Frank"
    }
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"))
console.log(phoneticLookup("echo"))

function checkObj(checkProp){
    if(ourDog.hasOwnProperty(checkProp)){
        return ourDog[checkProp];
    }else{
        return "Not Found";
    }
}
console.log(checkObj("name"));

var myMusic = [
    {
        "artist":"Billy Joel",
        "title":"Piano Man",
        "release":1973,
        "formats":[
            "CD",
            "8T",
            "LP"
        ],
        "gold":true
    },
    {
        "artist":"Beau Carnes",
        "title":"Cereal Man",
        "release":2003,
        "formats":[
            "YouTube video",
            "8T",
            "LP"
        ],
        "gold":true
    }
]

var myStorage = {
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)

// 2:00 min nest array
var myPlans = [
    {
        type:"flowers",
        list:[
            "rose",
            "tulp",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }
]
var secondTree = myPlans[1].list[1];
console.log(secondTree);

var collection = {
    "2548":{
        "album":"Slippery When Wet",
        "artist":"Bon Jovi",
        "tracks":[
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468":{
        "album":"1999",
        "artist":"Prince",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist":"Robert Palmer",
        "tracks":[]
    },
    "5439":{
        "album":"ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value){
    if (value ===""){
        delete collection[id][prop];
    }else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop]||[];
        collection[id][prop].push(value);
    }else{
        collection[id][prop]=value;
    }
    return collection;
}

console.log(updateRecords(5439,"artist","ABBA"));
console.log(updateRecords(5439,"artist",""));
console.log(updateRecords(2468,"tracks","Test"));

myArray = [];
var i = 0;
while(i <5 ){
    myArray.push(i);
    i++;

}
console.log(myArray);

for(i=0;i<5;i++){
    myArray.push(10+i);
}
console.log(myArray)

for(i=10;i>0;i-=2){
    myArray.push(i);
}
console.log(myArray)

var total=0;
for(i=0;i<myArray.length;i++){
    total+=myArray[i];
}
console.log(total)

function multiplyAll(arr){
    var product =1;

    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            product *=arr[i][j];
        }
    }
    return product;
}
var product=multiplyAll([[1,2],[3,4],[5,6,7]])
console.log(product)

// 2:24 min profile lookup

var contacts = [
    {
        "firstName":"Lorna",
        "lastName":"Cruickshank",
        "number":"5421590221",
        "likes":["Apple","Oringe","Banana"]
    },
    {
        "firstName":"Akira",
        "lastName":"Laine",
        "number":"0543236543",
        "likes":["Hogwarts","Magic","Hagrid"]
    },
    {
        "firstName":"Harry",
        "lastName":"Potter",
        "number":"0994372684",
        "likes":["Pizza","Coding","Brownie Points"]
    },
    {
        "firstName":"Sherlock",
        "lastName":"Holmes",
        "number":"0487345643",
        "likes":["Intriguing Cases","Violin"]
    }
]

function lookUpProfile(name, Prop){
    //console.log(name,Prop)
    //console.log(contacts.length)
    for (var i=0;i<contacts.length;i++){
        //console.log(contacts[i].firstName,name);
        if(contacts[i].firstName === name){
            //console.log(contacts[i][Prop]);
            return contacts[i][Prop]||"No Such Property"
            // if(contacts[i].hasOwnProperty(Prop)){
            //     return contacts[i][Prop];
            // }else{
            //     return "Not Such Property";
            // }
        }
    }
    return "No Such Name"
}

var data1 = lookUpProfile("Harry","likes");
console.log(data1);
data1 = lookUpProfile("Sherlock","number");
console.log(data1);
data1 = lookUpProfile("Sherlock1","number");
console.log(data1);
data1 = lookUpProfile("Sherlock","number1");
console.log(data1);

// 2:28 min
var randomNumberBetween0and19 = Math.floor(Math.random()*20);

var num=10;
function randomWholeNum(num){
    //return Math.random();
    return Math.floor(Math.random()*num);
}
console.log(randomWholeNum(num));

function convertToInteger(str,base){
    return parseInt(str,base);
}
console.log(convertToInteger("10101",10));

function checkEqual(a,b){
    return a===b;//return a === b ? true : false
}
console.log(checkEqual(2,1));

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negtive" : "zero ";
}
console.log(checkSign(0));

function checkScope(){
    "use strict";
    let i = "function scope i";
    var j = "function scope j";
    if(true){
        let i = "block scope i";
        var j = "block scope j";
        console.log("Block scope i is : ",i)
        console.log("Block scope j is : ",j)
    }
    console.log("function scope i is : ",i)
    console.log("function scope j is : ",j)
    return i;
}
checkScope();

function printManyTimes(str){
    "use strict";
    var sentence = str + " is cool!";
    const SENTENCE = str + " is constant!";
    sentence = str + " is amazing!";
    for( var i=0 ; i< str.length; i+=2){
        console.log(sentence);
    }
}
printManyTimes("freeCodeCamp")

const s = [5, 7, 2];
function editInPlace(){
    //s = [2, 5, 7]; error
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace()
console.log(s)

function freezeObj(){
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try{
        MATH_CONSTANTS.PI = 99;
    } catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
}
console.log(myConcat([1,2],[3,4,5]));

var myConcat1 = (arr1, arr2)=> arr1.concat(arr2);
console.log(myConcat1([1,2],[3,4,5]));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function() {
    return function increment(number, value = 1){
        return number + value;
    }
})();
console.log(increment(5, 2));
console.log(increment(5));

const sum1 = (function(){
    return function sum1(x, y, z){
        const args = [x, y, z];
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(sum1(1, 2, 3));

const sum2 = (function(){
    return function sum2(...args){
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(sum2(1, 2, 3,4));

const arr1 = ["Jan", "FEB", "MAR", "APR", "MAY"];
let arr2;
let arr3;
(function(){
    arr2 = arr1;
    arr3 = [...arr1]
    arr1[0] = "potato"
})();
console.log(arr2)
console.log(arr3)

const LOCAL_FORECASE = {
    today: { min: 72 , max: 83 },
    tomorrow:{ min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(forecast) {
    const { tomorrow: { max :maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECASE));

const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z,x,y)
let a1 = 8, b1 = 6;
(() => {[a1, b1] = [b1, a1]})();
console.log(a1);
console.log(b1);

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list){
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source)

const stats = {
    max: 56.78,
    stand_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function(){
    return function half({max, min}){
        return (max + min)/2.0;
    };
})();
console.log(stats);
console.log(half(stats));

const person1 = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person1.name}!
I am ${person1.age} years old.`;
console.log(greeting);

const result = {
    success: ["max-length", "no-amd","prefer-arrow-functions"],
    failure: ["no-var","var-on-top","linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr){
    const resultDisplayArray = [];
    for(let i = 0; i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning>${arr[i]}</li>"`)
    }
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)

const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));

const createPerson1 = (name, age, gender) => ({name, age, gender});
console.log(createPerson1("Lauri", 49, "male"));

const bicycle = {
    gear: 2,
    setGear: function(newGear){
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet)

class SpaceShuttle1 {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
} 

var zeus1 = new SpaceShuttle1('Jupiter1');
console.log(zeus1.targetPlanet)

function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9*(temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

/***
import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello");
console.log(cap) 
 */

 //import * as capitalizeStrings from "capitalize_strings";

 // export default function subract8(x,y) {return x-y;}

 //import substract from "math_functions"
 // subtract(7,4);