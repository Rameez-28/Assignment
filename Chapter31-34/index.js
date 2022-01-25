document.title = ("Chapter 31 to 34");

/*
1. Write a program that displays current date and time in
your browser.
*/
// var date = new Date();
//document.write(date);
/*
2. Write a program that alerts the current month in words.
For example December.
*/
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const d = new Date();
// let name1 = month[d.getMonth()];
// alert(`Current Month : ${name1}`);
/*
3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun.
*/
//Solve by two types: TYPE 1
// var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var day = new Date();
// var cDay = week[day.getDay()];
// var usingSlice = cDay.slice(0,3);
// document.write(usingSlice);

//Solve by two types: TYPE 2
// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var c = b.slice(0,3);
// document.write(` Today is  ${c}`);

/*
4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today.
*/
// var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var day = new Date();
// var cDay = week[day.getDay()];

// switch (cDay) {

//     case week[0]:
//         document.write(`Today is ${cDay} It's Fun day`)
//         break;
//     case week[1]:
//         document.write(`Today is ${cDay} It's Not Fun day`)
//         break;
//     case week[2]:
//         document.write(`Today is ${cDay} It's Not Fun day`)
//         break;
//     case week[3]:
//         document.write(`Today is ${cDay} It's Not Fun day`)
//         break;
//     case week[4]:
//         document.write(`Today is ${cDay} It's Not Fun day`)
//         break;
//     case week[5]:
//         document.write(`Today is ${cDay} It's Not Fun day`)
//         break;
//     case week[6]:
//         document.write(`Today is ${cDay} and It's Fun day.`)
//         break;
//     default:
//         document.write(` Not A weekday `);
// }

/*
5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”.
*/
// var currentDay = new Date();
// var date = currentDay.getDate();
// if (date < 16) {
//     document.write(`Today the date is ${date} and it's First fifteen days of the month`);
// }
// else {
//     document.write(`Last Days of the Month`);
// }
/*
6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object.
*/
// var currentDate = new Date();
// var Todaymilli = currentDate.getTime();

// var pastDate = new Date('1 January 1970');
// var save = pastDate.getSeconds();
// document.write(save);
// var todayMin = currentDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + currentDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)