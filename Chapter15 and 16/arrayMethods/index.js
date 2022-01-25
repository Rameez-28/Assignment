document.title= ("ARRAY METHOD");

var aryName= ["JOhn", "Vicky", "Daneil", "Shawn", "Abraham"]
document.write(aryName +"<br>");

aryName.sort(); //SORT METHOD
document.write("<br>Now Name Sorting By Using sort Method of Array<br>" + aryName);

aryName.reverse();//REVERSE METHOD
document.write("<br><br>Now Name in Reverse By Using reverse Method of Array<br>" + aryName);

aryName.pop();//REVERSE METHOD
document.write("<br><br>BY USING POP METHOD LAST ELEMENT  HAS BEEN DELETED<br>" + aryName);

aryName.push("ABRAHAM");//REVERSE METHOD
document.write("<br><br>BY USING PUSH METHOD ELEMENT HAS BEEN ADDDED IN LAST INDEX<br>" + aryName);

aryName.shift();//REVERSE METHOD
document.write("<br><br>BY USING SHIFT METHOD FIRST INDEX ELEMENT HAS BEEN DELETED<br>" + aryName);

aryName.unshift("BRAN");//REVERSE METHOD
document.write("<br><br>BY USING SHIFT METHOD ELEMENT HAS BEEN ADDED ON FIRST INDEX <br>" + aryName);

document.write("<br><br>CONCAT METHOD FOR MERGE DIFFERENT ARRAYS <br>" + aryName);
var ary1 = ["RAHUL","BRET LEE","VICKY"]
var ary2 = ["AFRIDI","JAVEED","BABAR"]
var ary4 = ["SOLID","ROCK"]
var ary3 = ary1.concat(ary2);

document.write("<br><br> 1st ARRAY LIST<br>"+ary1+ "<br>");
document.write("<br> 2nd ARRAY LIST<br>"+ary2+ "<br>");
document.write("<br> BOTH CONCAT THROUGH CONCAT METHOD<br>"+ary3);

var ary5 = ary1.concat(ary2,ary4)
document.write("<br><br>CONCAT AS MUCH AS YOU WANT THROUGH CONCAT METHOD<br>"+ary5); 




