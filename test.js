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