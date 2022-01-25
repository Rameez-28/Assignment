document.title = ("Arrays an loops");
//1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var muluAry = 
[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

document.write(muluAry[0][0]); 
document.write(muluAry[0][1]);
document.write(muluAry[0][2]);
document.write(muluAry[0][3]+ "<br>");
document.write(muluAry[1][0]);
document.write(muluAry[1][1]);
document.write(muluAry[1][2]);
document.write(muluAry[1][3]+ "<br>");
document.write(muluAry[2][0]);
document.write(muluAry[2][1]);
document.write(muluAry[2][2]);
document.write(muluAry[2][3]+ "<br>");

//3. Write a program to print numeric counting from 1 to 10.
document.write("<br>");
for(var num =1; num < 11; num++)
{
    document.write(num+ "<br>");
}

