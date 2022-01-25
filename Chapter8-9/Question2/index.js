
document.write(`2. Write a program to take input a number from user &
display it’s multiplication table on your browser. If
user does not enter a new number, multiplication
table of 5 should be displayed by default.
<br>`);

document.title = ("Chapter 8 Question 2.");
var name = prompt("Please Enter ANy Number");
var name = parseInt(name) || 5;
document.write( 
+name+ "* 1 ="+ name*1 +"<br>"
+name+ "* 2 ="+ name*2 +"<br>"
+name+ "* 3 ="+ name*3 +"<br>"
+name+ "* 4 ="+ name*4 +"<br>"
+name+ "* 5 ="+ name*5 +"<br>"
+name+ "* 6 ="+ name*6 +"<br>"
+name+ "* 7 ="+ name*7 +"<br>"
+name+ "* 8 ="+ name*8 +"<br>"
+name+ "* 9 ="+ name*9 +"<br>"
+name+ "* 10 ="+ name*10 +"<br>"
);



