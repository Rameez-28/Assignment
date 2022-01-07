// if hour is between 6am and 12pm: Good Morning!
// if it is between 12pm and 6pm: Good afternoon!
// otherwise: Good Evening
document.title = ("Chapter 9 (If/Else)");
let hour = +prompt("Please Enter Time");

if(hour > 6 && hour <12){
    document.write("Good Morning");
}
else if(hour >= 12 && hour <17){
    document.write("Good Afternoon");
}
else if (hour >= 17 && hour <21){
    document.write("Good Evening");
}
else
document.write("NIght Time Goto Sleep");