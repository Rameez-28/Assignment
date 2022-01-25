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
// var val1 = "472";
// document.write("Value :"+val1);
// document.write("<br> Type Of: "+typeof(val1));
// var val2 = parseInt(val1);
// document.write("<br> Value :"+val2);
// document.write("<br> Type Of :"+typeof(val2));

/*
10. Write a program that takes user input. Convert and
show the input in capital letters.
*/
// var user = prompt("Please Write ");
// document.write(`User Input : <br> ${user} <br><br> Upper Caps :<br> ${user.toUpperCase()} `); 

/*
11. Write a program that takes user input. Convert and
show the input in title case.
*/
//  var user = prompt("Please Write ");
//  var tileCase =  user.charAt(0).toUpperCase()+ user.slice(1).toLowerCase();
//  document.write(`User Input : <br> ${user} <br><br> Upper Caps :<br> ${tileCase} `); 

/*
12. Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.
*/

// var num = 35.56;
// var num1 = num.toString();
// document.write(`Number :${num1} <br><br> Result :${num1.replace(".","")} `);

/*
13. Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ .
*/
// var userName=prompt("Enter your Input: ");
// var message;
// var split=[];
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     split[i]=userName.split("&nbsp;");
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("please enter a valid userName");                                                                                                                   
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             split[i]=userName.split("&nbsp;");
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }

// }
// alert(message);

/*
14. You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. Example:
*/
// var arr = ["cake","apple pie","cookie","chips","patties"]
// var user = prompt("Welcome to ABC Bakery . What do you wan to order sir/ma'am? ")
// user = user.toLowerCase();

// if (user == arr[0] || user == arr[1] || user == arr[2] || user == arr[3] || user == arr[4] )
// {
// document.write(`Item ${user.toUpperCase()} is available`);    
// }
// else
// {
//     alert(`we're sorry required item is not available`);
// }

/*
15. Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document
*/

// var input = prompt("Enter password");
// var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var b = "";
// var c = /^A-Za-z0-9\s]+$/;
// var d = input.value;
// var e = c.test(input);

// if (input == b) {
//     document.write("Please enter value")
// } else if (input.length < 6) {
//     document.write("PAssword must be atleast 6 characer long")

// } else if (input.charCodeAt(0) > 47 && input.charCodeAt(0) < 58) {
//     document.write("PAssword does not start with number")

// }
 
// else if (input.search (/[0-9]/) == -1) 
// {
//     document.write("Must be Alpha numeric")

// }
// else 
// {
//     document.write("Valid Password");
// }

/*
16. Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser.
*/
var university = "University of Karachi";
var ar = university.split(''); // split string on comma space
document.write( ar );