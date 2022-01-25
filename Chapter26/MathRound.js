// let a =1.5;
// let b =2;
// let c= a+b;
// document.write(Math.round(c));

// var currentAge = prompt("Please Enter Your Age");
// var qualifyingAge = parseInt(currentAge) + 1;
// document.write(qualifyingAge);

// var integerString = "24"
// var num = Number(integerString);
// document.write(num);

/*
1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/

// var user = +prompt("Please Enter A Number");
// if(user > 0 )
// {
// document.write(`Number is Positve <br> Number: ${Number(user)} <br> Round off user enter value : ${Math.round(user)}
// <br> Floor Value of user enter value : ${Math.floor(user)} <br> Ceil Value of user enter value : ${Math.ceil(user)}
// `);
// }
// else
// {
// document.write("Invalid! Please Enter Positive Number");
// }

/*
2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/

// var user = +prompt("Please Enter A Number");
// if(user < 0 )
// {
// document.write(`Number is negative <br> Number: ${Number(user)} <br> Round off user enter value : ${Math.round(user)}
// <br> Floor Value of user enter value : ${Math.floor(user)} <br> Ceil Value of user enter value : ${Math.ceil(user)}
// `);
// }
// else
// {
// document.write("Invalid! Please Enter Negative Number");
// }

/*
3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5
*/

// var num = +prompt("Please Enter Vale");
// var num1 = Math.abs(num);
// document.write(`Absolute value of ${num} is: ${num1}`);

/*
4. Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.:
*/

// var random = Math.random();
// var improvednum = (random * 6 ) +1;
// document.write("Random Number of dice is : "+ Math.floor(improvednum));

/*
5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser
*/

// var random = Math.random();
// var improvednum = (random * 2) + 1;
// var toss = Math.floor(improvednum);
// if (toss == 1) {
//     document.write("Randon coin value Tails : " + toss)
// }
// else {
//     document.write("Randon coin value Head : " + toss)
// }

/*
6. Write a program that shows a random number between 1
and 100 in your browser.
*/

// var random = Math.random();
// var improvednum = (random * 99) + 1;
// var random1 = Math.floor(improvednum);

// document.write("Randon number between 1 and 100 : " + random1);
/*
7. Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms
*/

// var input = prompt("ENter your weight in Kilograms");
// var put = Number(input);
// document.write(`The weight of the user is ${put} Kilograms ${typeof(put)}`);

/*
8. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user.
*/
// var user = +prompt("Please Enter Number between 1 to 10");
// var num = Math.random();
// var improvednum = (num * 10) + 1;
// var num1 = Math.floor(improvednum);
// document.write(num1 + "<br>");

// if (user == num1) {
//     document.write("Congratulation");
// }
// else {
//     document.write("Try luck next time");
// }