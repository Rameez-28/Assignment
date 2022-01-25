
document.title = ("Chapter 13 (Testing Set of Condition)");

var age = +prompt ("Please Enter Your Age");
var gpa = +prompt ("Please Enter gpa");
var gender = prompt("Please Enter Your Gender");

if (age >=18 && age <50  && gender.toUpperCase() == "MALE" && gpa >= 3) {
    document.write("Congratulation You Are Eligible For Apply This Vacancy");
}
else{
    document.write("You are not eligible");
}

