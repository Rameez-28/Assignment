document.title=("Assignment of Arrays");

document.write(`1. Declare an empty array using JS literal notation to store
student names in future.<br>`);

var stuDetails = ['Rameez' ,12 ," Sharoz ",15];
document.write(stuDetails);

document.write(`<br><br>2. Declare an empty array using JS object notation to store
student names in future<br>`);
var stuDetails = new Array ('Rameez' ,12 ," Sharoz ",15);
document.write(stuDetails);
document.write("<br>");

//FORSTORING UNLIMITED VALUES
document.write("<br> 3: <br>");
var stuDetails = new Array ();
stuDetails[0] = "Rameez";
stuDetails[1] = "Malik"
stuDetails[3] = 15;

document.write(stuDetails);
document.write("<br>");

//FORSTORING LIMITED VALUES
document.write("<br> 4: <br>");
var stuDetails = new Array (2);
stuDetails[0] = "Rameez";
stuDetails[1] = "Malik"
stuDetails[3] = 15;

document.write(stuDetails);
document.write("<br>");
document.write("<br>");

//MULTIDIMENSIONAL ARRAY
document.write("<br> 5: <br>");
var students = 
[
                ["Rameez","BSCS",18],
                ["Shahroz","Graduate",15],
                ["Hassam","Bcom",20]
];

for (var a = 0; a < 3; a++)
{
    document.write(students[a]+"<br>")
}
document.write("<br>");
document.write("<br>");

//USING NESTED LOOP FOR HIDE OR DELETE , COMMA FROM OUTPUT
document.write("<br> 6: <br>");
var students = 
[
                ["Rameez","BSCS",18],
                ["Shahroz","Graduate",15],
                ["Hassam","Bcom",20]
];

for (var a1 = 0; a1 < 3; a1++)
{
    for (var b = 0; b<3; b++ )
    {
    document.write(students[a1][b]+" ");
    }
document.write(students[a1][b]+"<br>");

}
document.write("<br>");
document.write("<br>");

//ARRAY PRINT THROUGH INDEXING
document.write("<br> 7: <br>");
var students = 
[
                ["Rameez","BSCS",18],
                ["Shahroz","Graduate",15],
                ["Hassam","Bcom",20],
                ["Zubair","Diploma",28]
];
//In indexing first box read as Row and Second read Column, i.e [ROW][COLUMN]
document.write(students[0][0]);
document.write("<br>"+students[0][1]);
document.write("<br>"+students[2][0]);
document.write("<br>"+students[3][1]);

document.write("<br>");
document.write("<br>");

//Adding Table amd Row by usinf HTML tag
document.write("<br> 8: <br>");

var students = 
[
                ["Rameez","BSCS",18],
                ["Shahroz","Graduate",15],
                ["Hassam","Bcom",20]
];

document.write("<table border='1px' cellspacing ='0'>");//HTML TAG FOR TABLE ROW
for (var a1 = 0; a1 < 3; a1++)
{
document.write("<tr>"); //HTML INSERT FOR TABLE THRUGH <tr> tag
    for (var b = 0; b<3; b++ )
    {
    document.write("<td>"+students[a1][b]+"</td>");
    }
document.write("</tr>");//HTML INSERT FOR TABLE THRUGH <tr> tag
}
document.write("</table>"); //HTML TAG FOR TABLE ROW

document.write("<br>");
document.write("<br>");

//Changing in Array Element
document.write("<br> 9: <br>");

var bioData = ["Rameez",28,"BSCS","Male"]
document.write(bioData + "<br>");

bioData[0]= "Shahroz";
document.write(bioData + "<br>");//0 index element changed

bioData[2]= "Bcom";
document.write(bioData + "<br>");//0 index element changed

//Delete in Array Element
document.write("<br> 9: <br>");

var bioData = ["Rameez",28,"BSCS","Male"]
document.write(bioData + "<br>");

bioData[1] = 25;
document.write("<br>" + bioData + "<br>");

delete bioData[1];//Deleting 
document.write("<br>" + bioData + "<br>");

/*
8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:
*/

var stu = ["Michel", "John", "Tony"]
var score =[320,230,480]
var marks = 500;

document.write
(
  "<br>"+stu[0]+" "+score[0] +" Percentage % " +score[0]/marks*100 + 
  "<br>" +stu[1]+" "+score[1] +" Percentage % " +score[1]/marks*100 +
  "<br>" +stu[2]+" "+score[2] +" Percentage % " +score[2]/marks*100
);