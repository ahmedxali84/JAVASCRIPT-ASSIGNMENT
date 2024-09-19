// JavaScript Class 1 (chap 1)
alert("Welcome to JavaScript");

// Variable for string (chap 2)
let firstName = "Ahmed";
let lastName = "Ali";
let fullName = firstName + " " + lastName; 
console.log(fullName);

// Variable for number (chap 3)
var num1 = 50;
let result = num1 * 3;
console.log(result);

var weight = 180;
weight += 20; 
console.log(weight);

// Variable Names Legal and Illegal (chap 4)
// Legal:
myCity = "Karachi";
my_city = "Karachi";
_cityName = "Karachi";
CityName = "Karachi";
CITYNAME = "Karachi";
city1 = "Karachi";
city$ = "Karachi";

// Illegal:
// 1city = "Karachi";
// my-city = "Karachi";
// city name = "Karachi";
// my@city = "Karachi";
// my%city = "Karachi";

// Math expressions: Familiar operators (chap 5)
var x = 10;
var y = 5;
console.log(x - y);  // 5
console.log(x + y);  // 15
console.log(x * y);  // 50
console.log(x / y);  // 2

// Math expressions: Unfamiliar operators (chap 6)
var p = 3;
var q = 8;
console.log(p--);  // Outputs 3, then decrements
console.log(++q);  // Increments before output, outputs 9

// Math expressions: Eliminating ambiguity (chap 7)
var numA = 3;
var numB = 15;
console.log(2 * numA + numB);  // Outputs 21
console.log(5 * numA + numB);  // Outputs 30

// Concatenating text strings (chap 8)
var name = "Ahmed";
alert("Hello, " + name + "! Welcome back.");

// Prompt (Chap 9)
var question = "What is your favorite color?";
var color = prompt(question);

// Simple Calculator Using Prompt
var firstNumber = prompt("Enter the first number");
var secondNumber = prompt("Enter the second number");

var num1 = Number(firstNumber);
var num2 = Number(secondNumber);

var sum = num1 + num2;
alert("The sum is: " + sum);
