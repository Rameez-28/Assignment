/*
1. Write a program that take two numbers & add them in a new
variable. Show the result in your browser
*/

var num1 = 13;
var num2 = 9;
var num3 = num1 + num2;

document.write(`1. Write a program that take two numbers & add them
 in a new variable Show the result in your browser <br>`);

document.write("Answer :"+num3+"<br>");

/*
2. Repeat task1 for subtraction, multiplication, division &
modulus. E.g.
*/
document.write(`<br>2. Repeat task1 for subtraction, multiplication, division &
modulus. E.g. <br>`);
num3 = num1 - num2;
document.write("<br>Answer of 13 - 9 = :"+num3);

num3 = num1 * num2;
document.write("<br>Answer of 13 * 9 ="+num3);

num3 = num1 / num2;
document.write("<br>Answer of 13 / 9 ="+num3);

num3 = num1 % num2;
document.write("<br>Answer of 13 % 9 ="+num3);

document.write(`<br><br>
3. Do the following using JS Mathematic Expressions<br>
a. Declare a variable.<br>
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
<br> c. Initialize the variable with some number.
<br> d. Show the value of variable in your browser like “Initial
value: 3”.
<br> e. Increment the variable.
<br> f. Show the value of variable in your browser like “Value
after increment is: 4”.
<br> g. Add 7 to the variable.
<br> h. Show the value of variable in your browser like “Value
after addition is: 11”.
<br> i. Decrement the variable.
<br> j. Show the value of variable in your browser like “Value
after decrement is: 10”.
<br> k. Show the remainder after dividing the variable’s value by
3. <br>Output : “The remainder is : 1”
<br>`);

var img3 = document.createElement("img");
img3.src = "Question3.jpg";
document.body.appendChild(img3);

var value1;
value1 = 3;
document.write("<br> <br> Answer (a and b.)<br> Value after variable declaration is:"+value1);
document.write("<br> <br> Answer (c and d.)<br> Inital value is:"+value1);

value1++
document.write("<br> <br> Answer (e and f.)<br> Increment of variable.:"+value1);

var value2 = 7;
var value3 = value1 + value2;
document.write("<br> <br> Answer (g and h.)<br> Add of 7 in variable.:"+value3);

value3--
document.write("<br> <br> Answer (i and j.)<br> Decrement of variable.:"+value3);

value4 = value3 % 3;
document.write("<br> <br> Answer (k.)<br> Decrement of variable.:"+value4);

document.write(`<br><br>
4. Cost of one movie ticket is 600 PKR. Write a script to store
ticket price in a variable & calculate the cost of buying 5 tickets
to a movie. Example output:
<br>`);

var costPerTicket = 600;
var buyTicket = costPerTicket * 5;
document.write("Answer<br> Total cost to buy 5 Tickets to movie is :" +buyTicket );

document.write(`<br><br>
5. Write a script to display multiplication table of any number in
your browser. E.g.
<br>`);
var tableOf4 = 4;
document.write("Answer<br> Multiplication of Table 4<br>");
document.write(
"    4 * 1  =  &nbsp&nbsp&nbsp" +tableOf4 +
"<br>4 * 2  =  &nbsp&nbsp "     + (tableOf4)  * 2 +
"<br>4 * 3  =  &nbsp&nbsp"      + (tableOf4)  * 3 +
"<br>4 * 4  =  &nbsp&nbsp"      + (tableOf4)  * 4 +
"<br>4 * 5  =  &nbsp&nbsp"      + (tableOf4)  * 5 +
"<br>4 * 6  =  &nbsp&nbsp"      + (tableOf4)  * 6 +
"<br>4 * 7  =  &nbsp&nbsp"      + (tableOf4)  * 7 +
"<br>4 * 8  =  &nbsp&nbsp"      + (tableOf4)  * 8 +
"<br>4 * 9  =  &nbsp&nbsp"      + (tableOf4)  * 9 +
"<br>4 * 10 =  "                + (tableOf4)  * 10
);

document.write(`<br> <br>
6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
<br>a. Store a Celsius temperature into a variable.
<br>b. Convert it to Fahrenheit & output “NNoC is NNoF”.
<br>c. Now store a Fahrenheit temperature into a variable.
<br>d. Convert it to Celsius & output “NNoF is NNoC”.
<br> Formula Celsius to Fahrenheit(0°C × 9/5) + 32 = 32°F.
<br> Formula Fahrenheit to Celsius(32°F − 32) × 5/9 = 0°C.
<br>`);
var celsius = 12;
celsius = celsius *(9/5) +32;
document.write("Answer<br> 12°C Fahrenheit is: &nbsp" + celsius);

var fahrenheit = 68;
fahrenheit = (fahrenheit - 32) * 5/9;
document.write("Answer<br> 12°C Fahrenheit is:" + fahrenheit);

document.write(`<br> <br>
7. Write a program to implement checkout process of a shopping
cart system for an e-commerce website. Store the following in
variables
<br>a. Price of item 1
<br>b. Price of item 2
<br>c. Ordered quantity of item 1
<br>d. Ordered Quantity of item 2
<br>e. Shipping charges
<br>`);

var img7 = document.createElement("img");
img7.src = "Question7.jpg";
document.body.appendChild(img7);

var priceItem1 = 560;
var priceItem2 = 200;
var qtyOfItem1 = 2;
var qtyOfItem2 = 5;
var shippingCharges = 150;

var totalItem1 = priceItem1*qtyOfItem1;
var totalItem2 = priceItem2*qtyOfItem2;
var totalBill = totalItem1+totalItem2+shippingCharges; 

document.write(
"<br> Price of item 1 is :&nbsp"    +priceItem1+ 
"<br> Quantity of Item 1 is :&nbsp" +qtyOfItem1+
"<br> Price of item 2 is :&nbsp"    +priceItem2+
"<br> Quantity of Item 2 is :&nbsp" +qtyOfItem2+
"<br> Shipping Charges :&nbsp" +shippingCharges+
"<br> Total cost of your order is &nbsp:" +totalBill+
"<br>"
);

var img8 = document.createElement("img");
img8.src = "Question8.jpg";
document.body.appendChild(img8);

document.write("<br><H1>Mark Sheet</h1>");

var totalMarks = 1200;
var marksObt = 900;
var percent = marksObt/totalMarks*100;
document.write(
"Total Marks &nbsp" +totalMarks+
"<br> Marks Obtain &nbsp" +marksObt+
"<br> Your Percentage is: &nbsp" +percent+ "%.<br>"
);

var img9 = document.createElement("img");
img9.src = "Question9.jpg"
document.body.appendChild(img9);

document.write("<br><H1>Currency in PKR</h1>");

var usdToPkr = 104; 
var riyaltoPkr =28;
var totalAmt = (usdToPkr*10) + (riyaltoPkr*25);

document.write(
    "<br> Total Currency in PKR is :&nbsp" +totalAmt+
    "<br>"
    );

    var img10 = document.createElement("img");
    img10.src = "Question10.jpg"
    document.body.appendChild(img10);

    var var1 = (5)*(10)/(2);
    document.write("<br>Answer<br>"+var1+ "<br>");
    
var img11 = document.createElement("img");
img11.src = "Question11.jpg"
document.body.appendChild(img11);

var currentYear = 2022; 
var birthYear = 1993;
var age = (currentYear)-(birthYear);


document.write(
    "<br> Current Year is :&nbsp" +currentYear+
    "<br> Birth Year is : &nbsp" +birthYear+
    "<br> They are either : &nbsp" +age+ "&nbsp or &nbsp" + (age+1) +"<br>"
    );

var img12 = document.createElement("img");
img12.src = "Question12.jpg"
document.body.appendChild(img12);

var radius = 12;
var circum = (2)*(3.142)*radius;
var area = radius*radius*3.142;
document.write(
"<br> <h1> The Geometrizer</h1>" +
" Radius of circle is :&nbsp" +radius+
"<br> The Circumferance is :&nbsp" +circum+
"<br> The Area is :&nbsp" +area+ "<br>"
);

var img13 = document.createElement("img");
img13.src = "Question13.jpg"
document.body.appendChild(img13);

var a = 10;
document.write(
"<br>Result:<br> The Value of A is : &nbsp" +a+
"<br>........................"+
"<br> The Value of ++a is :&nbsp" + ++a +
"<br> Now The Value of a is :&nbsp" + a +
"<br><br> The Value of a++ is :&nbsp" + a +
"<br> Now The Value of a is :&nbsp" + ++a +
"<br><br> The Value of --a is :&nbsp" + --a +
"<br> Now The Value of a is :&nbsp" + a + 
"<br><br> The Value of a-- is :&nbsp" + a +
"<br> Now The Value of a is :&nbsp" + --a +"<br>" 
);

var img14 = document.createElement("img");
img14.src = "Question14.jpg"
document.body.appendChild(img14);

var a =2; 
var b =1;
var result = --a;
var result1 = --a - --b;
var result2 = --a - --b + ++b;
var result3 = --a - --b + ++b + --b;
document.write("<br>"+ result);
document.write("<br>"+ result1);
document.write("<br>"+ result2);
document.write("<br>"+ result3+"<br>");

var img15 = document.createElement("img");
img15.src = "Question15.jpg"
document.body.appendChild(img15);

document.write("<br><h1>The Lifetime Supply Calculator</h1>");
var fvtSnack = "Lemon Sandwich";
var age = 29;
var estAge = 80;
var perDaySnack = 2; 
var ddAge = estAge-age;
var calc = ddAge*perDaySnack;

document.write(
"<br>Favorite Snack :&nbsp" + fvtSnack +
"<br>Current Age :&nbsp"    + age+
"<br>Estimated Maximum Age :&nbsp" + estAge+
"<br>Amount of Snacks per day :&nbsp" +perDaySnack +
"<br>You will need  :&nbsp" +calc + "&nbsp Lemon Sandwich biscuits until ripe old age of 80"     
);