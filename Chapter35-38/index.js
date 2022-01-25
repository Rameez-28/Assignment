document.title = ("Ch 35 to 38");
/*
1. Write a function that displays current date & time in your
browser.
*/

// function tellTime() {
//     var now = new Date();
//     alert(now);

// }
// tellTime();

/*
2. Write a function that takes first & last name and then it
greets the user using his full name.
*/

// function fullName(Firstname, Lastname) {
//     var fullname = document.write(`Welcome ${Firstname + " " + Lastname}`);
//     return fullname;
// }

// fullName("Rameez", "Malik");

/*
3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers.
*/
// function sum(num1, num2) {
//     var sum = document.write(`The sum of ${num1} and ${num2} is = ${num1 + num2}`);
//     return sum;
// }

// var val1 = +prompt("Please enter First value of sum");
// var val2 = +prompt("Please enter First value of sum");
// sum(val1, val2);

/*
4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser.
*/

// function calc(usaer1, usaer2, usaer3) {
//     if (usaer2 == '+') {
//         document.write(`Your value ${usaer1} + ${usaer3} is : ${usaer1 + usaer3}`);
//     }
//     else if (usaer2 == '-') {
//         document.write(`Your value ${usaer1} - ${usaer3} is : ${usaer1 - usaer3}`);
//     }
//     else if (usaer2 == '*') {
//         document.write(`Your value ${usaer1} * ${usaer3} is : ${usaer1 * usaer3}`);
//     }
//     else if (usaer2 == '/') {
//         document.write(`Your value ${usaer1} / ${usaer3} is : ${usaer1 / usaer3}`);
//     }
//     else {
//         document.write("Please choose given operator");
//     }
// }
// var let1 = +prompt("please enter value 1");
// var let2 = prompt("Please Choese any one oprator + . - . * . /");
// var let3 = +prompt("please enter value 1");

// calc(let1, let2, let3);

/*
5. Write a function that squares its argument.
*/
// function squ(num) {
//     var b = num * num;
//     var c = document.write(`You Entered ${num} sq of entered value is :${b}.`);
//     return c;

// }
// var let1 = +prompt("please enter value for square");

// squ(let1);

/*
6. Write a function that computes factorial of a number.
*/
//var user1 = +prompt("Please Enter NUmber For Factorial");

// function fact(user) {
//     let num = 1;
//     if (user < 0) {
//         document.write("Can't find factorial of negative number");
//     }
//     else {
//         for (var a = 2; a <= user; a++) {
//             num = num * a;
//         }
//         document.write(`The Factorial of entered num ${user} is : ${num}`);
//     }
// }

// var let1 = +prompt("please enter value for factorial");
// fact(let1);

/*
7. Write a function that take start and end number as inputs
& display counting in your browser.
*/

// function count(start, end) {
//     if (start < end) {
//         for (var a = start; a <= end; a++) {
//             document.write(a + "<br>");
//         }
//     }
//     else {
//         document.write("Reverse counting not allowed.");
//     }
// }
// var s = +prompt("Please Enter start numbe rof counting");
// var e = +prompt("Please Enter End numbe rof counting");

// count(s, e);

/*
8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
*/
// function triangleHypotenuse(base, height) {
//     function square(side) {
//         return side * side;
//     }
//     return Math.sqrt(square(base) + square(height));
// }
// document.write("Hypotenuse of triangle is :" + triangleHypotenuse(3, 4));

/*
NESTED FUNCTION GET NAME AGE IN THS FUNCTION WE CALL ANOTHER FUNCTION IN FUNCTION 
*/
// function getAge(name, age) {
//     document.write(name + " age is :" + age + " years" + "<br>");
// }
// function getName(name, age) {
//     document.write("I am :" + name + "<br>");//document.write() prints output in a browser
//     getAge(name, age);
// }

// getName("Amardeep", 26);
// getName("Paramesh", 24);
// getName("Jyothi", 25);

/*
9. Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables
*/

var m = 0; //global value
function areaOfRect(width, height) //p,q parent values
{
    var cal = width * height;//local value
    document.write(`<br> Area of Rectangle is = ${cal}<br>`);
    function child(width,height) {
        
        document.write(`Width is ${width} and Height is ${height}`);//<br>takes output to new line
       
        
    }
    child(2,4);
}

// areaOfRect();