document.title = ("Table Print");


var tblNum = +prompt("Please ENter Num For Table");
var tblLength = +prompt("Please Enter Length For Table");
var a=1;
for(a = 1; a<= tblLength; a++ )
{
    document.write(tblNum+"x"+a+"="+tblNum*a+"<br>");

}