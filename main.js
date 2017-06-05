// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
var givenName;
// A:Undefined


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A:Tim


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A:Tim


// 4.
// What is `greeting` set to?
var greeting = "Hello, how are you? " + givenName;
// "Hello, how are you Tim?"A:Undefined


// 5.
// What is `math` set to?
var high = 50;
var low  = 10;
var math = high - low;
// A:40


// 6.
// What is `math` set to?
math = high - "5";
// A:


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
var born = 1984;
var today = 2017;
var age = today - born;
console.log("Tim is " + age;
// A:


// 8.
// Adjust this code. Store some information in the following variables.
// A:
var yourName;
var instructorName;

var Joe;
var Jon;


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:


// This statement should read correctly
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log( "")


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
var myNumber;
var myString;
var myBoolean;
// This one's a little tricky - think carefully about what makes a value "undefined"!
var myUndefined;
// A:


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
var x = (false == 0);
// A.false


// 12.
var y = (false == "");
// A.true


// 13.
var z = (0 == "");
// A. true


// 14.
var a = (null == null);
// A. false


// 25.
var b = (undefined == undefined);
// A. true


// 16.
var c = (undefined == null);
// A. true


// 17.
var d = (null == false);
// A. true


// 18.
var e = (NaN == null);
// A. false


// 19.
var f = (NaN == NaN);
// A. true


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
var thirsty = true;

{
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
var x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 23.
// this expression will set x to NaN
var x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A:true


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:true


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and request an instructor.
