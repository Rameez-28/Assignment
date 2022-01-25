document.title = "Chapter8-9 Question 3";

var sub1,sub2,sub3;
sub1 = "English";
sub2 = "Math";
sub3 = "Urdu";

var marks;
marks = 100;

 var obtMarks1 = +prompt("Please Enter English Marks");
 var userMarks1 = obtMarks1;


 var obtMarks2 = +prompt("Please Enter Math Marks");
 var userMarks2 = obtMarks2;

 var obtMarks3 = +prompt("Please Enter Urdu Marks");
 var userMarks3 = obtMarks3;

 var totalOBtMarks = userMarks1+userMarks2+userMarks3;
 var per= (totalOBtMarks/300)*100;
 var per = per.toFixed(2);

document.write(
`<h1> Subject Total Marks </h1> 
 <br> <h3>Subject &nbsp&nbsp&nbsp Total Marks &nbsp&nbsp&nbsp
 Obtain Marks &nbsp&nbsp&nbsp Percentage</h3>` +sub1 +  
 "&ensp;&ensp;&ensp;" + marks + "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;" + userMarks1 + "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp" + (userMarks1/marks)*(marks) + "%" +
 "<br> <br>" + sub2 +
 "&ensp;&ensp;&ensp;&ensp;" + marks + "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;" + userMarks2 + "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp" + (userMarks2/marks)*(marks) + "%" +
 "<br> <br>" + sub3 +
 "&ensp;&ensp;&ensp;&ensp;" + marks + "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;" + userMarks3 + "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp" + (userMarks3/marks)*(marks)  + "%" +
 "<br><br> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>" + marks*3 + "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <b>" +totalOBtMarks+ 
 "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>" +per+ " %"
 );