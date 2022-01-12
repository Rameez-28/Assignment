document.title = ("Chapter 21 to 25");

/*
1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.
*/

// var firstName = prompt("Please enter First First Name");
// var lastName = prompt("Please enter Last First Name");
// var fullName = firstName+" "+lastName;

// document.write(`Hello ${fullName} Welcome to GOK.`);

/*
2. Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser
*/

// var mobName = prompt("Please enter your favorite Mobile Name");
// document.write(`My Favorite mobile is : ${mobName} <br> Length of string is: ${mobName.length}`)

/*
3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .
*/
// var counName = "PAKISTAN";
// document.write(`STRING: ${counName} <br> Index of 'n': ${counName.search("N")}`);

/*
4. Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser
*/
// var word = "HELLO WORLD";
// document.write(` ${word} <br> Index of 'n': ${word.lastIndexOf("L")}`);

/*
5. Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.
*/
// var word = "Pakistani";
// document.write(`String : ${word} <br> Character at Index : ${word.charAt(3)}`);

/*
6. Repeat Q1 using string concat() method.
rite a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.
*/
// var firstName = prompt("Please enter First First Name");
// var lastName = prompt("Please enter Last First Name");
// var fullName = firstName.concat("&nbsp"+lastName);
// document.write(`Welcome Mr. ${fullName}.`);

/*
7. Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser.
*/
// var valu1= "Hyderabad";
// document.write("Before Replacement :",valu1);
// var valu2 = valu1.replace("Hyder","Islam");
// document.write("<br>After Replacement :",valu2);

/*
8. Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”
*/
// var valu1= `Ali and Sami are best friends. They play cricket and
// football together`;
// document.write("Before Replacement :",valu1);
// var valu2 = valu1.replace(/and/g,"&");
// document.write("<br>After Replacement :",valu2);

/*
9. Write a program that converts a string “472” to a number
472. Display the values & types in your browser.
*/
var val1 = "472";
var val2 = parseInt(val1);
document.write(val2);
document.write("<br>"+typeof(val2));
