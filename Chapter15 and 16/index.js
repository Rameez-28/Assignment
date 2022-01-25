document.title=("Chapter 15 Arrays");

document.write("Simple Array Print :");
var ary = [10,20,30,40,50];
document.write(ary);

document.write("<br><br> Arrays Print Through Index :");
// var ary = [10,20,30,40,50];
document.write("<br>Array index starts with Zero <br>In 0 index value is :"+ ary[0],"<br>In First index value is :" +ary[1]
+"<br>In Second index value is :" +ary[2]+"<br>In Third index value is :" +ary[3]+"<br>In Fourth index value is :" +ary[4]);

document.write("<br><br> Arrays Print by For Loop :<br>");
for (var a = 0 ; a < 5 ; a++ )
{
    document.write(ary[a] + "<br>");
}

document.write("<br><br> Addition Arrays :<br>");
var sum = 0;
for (var a = 0 ; a < 5 ; a++ )
{
    document.write(ary[a] + "<br>");
    sum = sum + ary[a];
}
document.write("<br>The sum of all array is :"+sum);

document.write("<br><br> Undefine or Unlimited Arrays :<br>");
var ary = new Array();
ary[0] = 10;
ary[1] = "Rameez";
ary[3] = 15;

for (var a = 0 ; a < 5 ; a++ )
{
    document.write(ary[a] + "<br>");
    sum = sum + ary[a];
}

document.write("<br><br> Get Value from user through Array :<br>");
var ary = new Array(3);
for (var userValue = 0 ; userValue < 3 ; userValue++ )
{
    ary[userValue] = prompt("Please Enter Value");
}
for (var a = 0 ; a < 3 ; a++ )
{
    document.write(ary[a] + "<br>");
    
}
