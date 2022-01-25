
// document.title = ("Array Name Through Loop");
/*
5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”]
*/
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (var a = 0; a < 5; a++) {
//     document.write(fruits[a] + "<br>");
// }
// document.write("<br>");
// for (var x = 0; x < fruits.length; x++) {

//     document.write("Element at index " + x + " is " + fruits[x] + "<br>");
// }

/*
6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
*/
// var count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// document.write(count+"<br><br>");
// document.write(count.reverse());

// for(var a =2; a < 21; a++)
// {
//  if(a%2==0)
//  {
//     document.write(`This is even number: ${a} <br>`)
//  }
 
// }

// for(var a =0; a < 21; a++)
// {
//  if(a%2!=0)
//  {
//     document.write(`This is odd number: ${a} <br>`)
//  }
 
// }

// for(var a =2; a < 21; a++)
// {
//  if(a%2==0)
//  {
     
//     document.write(`series: ${a*1000} <br>`)
//  }
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var user = ["cake","apple pie", "cookie", "chips", "patties"]
// var input = prompt("WELCOME TO ABC BAKERY. WHAT DO YOU WANT TO ORDER SIR/MA'AM");

// if (input.toLowerCase() == user[0])
// {
// document.write(`${user[0]} is available at index ${user.indexOf("cake")} <br>`);
// }
// else if (input.toLowerCase() == user[1])
// {
// document.write(`${user[1]} is available at index ${user.indexOf("apple pie")} <br>`);
// }
// else if (input.toLowerCase() == user[2])
// {
// document.write(`${user[2]} is available at index ${user.indexOf("cookie")} <br>`);
// }
// else if (input.toLowerCase() == user[3])
// {
// document.write(`${user[3]} is available at index ${user.indexOf("chips")} <br>`);
// }
// else if (input.toLowerCase() == user[4])
// {
// document.write(`${user[4]} is available at index ${user.indexOf("patties")} <br>`);
// }
// else
// {
//     document.write(`We are sorry ${input} is not avaiable right now.`);
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var lar = [24, 53, 78, 91, 12];
// document.write(lar);
// // var find = Math.max(...lar);
// document.write(`<br>The Largest num is : ${Math.max(...lar)}`);
// /*
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// */
// document.write(`<br>The Smallest num is : ${Math.min(...lar)}`);

// 10. Write a program to print multiples of 5 ranging 1 to 100.

// for(var a =1; a <= 20; a++)
// {
//  document.write(`${a*5}  ,`)
// }

// 11. Write a program that prints number from start of the
// array to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34


// var scores = [12, 45, 3, 22, 34, 50];
// var user = +prompt("Please Enter Value any one 12, 45, 3, 22, 34, 50");

// if (user == 12)
// {
//     document.write(scores[0]);
// }
// else if (user == 45)
// {
//     document.write(scores.slice(0,2));
// }
// else if (user == 3)
// {
//     document.write(scores.slice(0,3));
// }
// else if (user == 22)
// {
//     document.write(scores.slice(0,4));
// }
// else if (user == 34)
// {
//     document.write(scores.slice(0,5));
// }
// else if (user == 50)
// {
//     document.write(scores);
// }
// else{

//     document.write("Please Select Given Value");
// }

/*
12. The even/odd reporter
Write a for loop that will iterate from 0 to 20. For each
iteration, it will check if the current number is even or
odd, and report that to the screen (e.g. "2 is even").
*/

// for (var i = 0; i <= 20; i++) {
//     if ( i % 2 == 0) {
//    document.write(i + " is even <br>");
//     }
//     else {
//     document.write(i + " is odd <br>");
//     }
//   };

/*
13. Write a program to calculate the product of the odd
integers from 1 to 7.
*/
// let fact = 1;

// for (let i = 0; i < 8; i++)
//  {
//     if ( i % 2 !== 0) {
//    fact = i * fact
//  }
// }
// document.write(fact);

/*
14. Write a program that will write out a wedge of stars. The
user will enter the initial number of stars, and the
program will write out lines of stars where each line has
one few star than the previous line. Initial number of
stars: 7
*******
******
*****
****
***
**
*
*/

// let c= prompt("PLEASE ENTER ANY NUMBER");

// for (var a = 1; a <= c; a++ )
// {
//     for (var b=a; b<=c; b++)
//     {
//     document.write("*");
//     }
// document.write("<br>");
// }

/*
15. Write a program to create the following patterns in your
browser. Take number of lines as an input.
a. 
*****
*****
*****
*****
*/
// let c= prompt("PLEASE ENTER ANY NUMBER");

// for (var a = 1; a <= c; a++ )
// {
//     for (var b=1; b<=c; b++)
//     {
//     document.write("*");
//     }
// document.write("<br>");
// }

/*
b. 
*
**
***
****
*****
*/

// let c= prompt("PLEASE ENTER ANY NUMBER");

// for (var a = 0; a <= c; a++ )
// {
//     for (var b=0; b<=a; b++)
//     {
//     document.write('*');
//     }
//     document.write('<br>');
// }

/*
c.
*****
****
***
*/

// let c= prompt("PLEASE ENTER ANY NUMBER");

// for (var a = 1; a <= c; a++ )
// {
//     for (var b=a; b<=c; b++)
//     {
//     document.write("*");
//     }
// document.write("<br>");
// }

/*
d.
*
**
***
****
*****
******
*******
********
*********
**********
***********
**********
*********
********
*******
******
*****
****
***
**
*
*/

let c= prompt("PLEASE ENTER ANY NUMBER");
for (var a = 1; a <= c; a++ ){
    
    for (var b=0; b!=a; b++){
        document.write("*");
    }
    document.write("<br>");
}
for (var a = 1; a <= c-1; a++ )
{
    for (var b=a; b<=c-1; b++)
    {
    document.write("*");
    }
document.write("<br>");
}
