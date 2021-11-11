/*
    OutComment the rest to try out a method

*/ 

//  ########################    JS STRING SEARCH    ###############################

//String.indexOf()   returns the index of (the position of) the first occurrence of a specified text in a string
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");

//String.lastIndexOf()
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");

//Both indexOf(), and lastIndexOf() return -1 if the text is not found:
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("John");

//String.search()     method searches a string for a specified value and returns the position of the match
let str = "Please locate where 'locate' occurs!";
str.search("locate");

//String.match() The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);

//String.includes()   The includes() method returns true if a string contains a specified value.

let text = "Hello world, welcome to the universe.";
text.includes("world");

//String.startsWith() The startsWith() method returns true if a string begins with a specified value, otherwise false:

let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");

//String.endsWith()   The endsWith() method returns true if a string ends with a specified value, otherwise false:

var text = "John Doe";
text.endsWith("Doe");


//  ########################    JS Template Literals    ###############################

//Template literals allow variables in strings:
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

//HTML Templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;


//  ########################    JS Number Methods   ###############################

//The toString() method returns a number as a string.
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();

//toExponential() returns a string, with a number rounded and written using exponential notation
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

//toFixed() returns a string, with the number written with a specified number of decimals
let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);

///toPrecision() returns a string, with a number written with a specified length:
let x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

//Dates
Number(new Date("1970-01-02"));// returns the number of milliseconds since 1.1.1970.