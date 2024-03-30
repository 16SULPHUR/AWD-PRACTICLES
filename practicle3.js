// Practicle 3: Write a JavaScript to demonstrate properties and methods of Date reference Type.

// Name: Ankit Patil
// Enrollment No: 202203103510124

console.log("\n=> Name: Ankit Patil\n=> Enrollment No: 202203103510124\n")

var currentDate = new Date();
console.log("Current Date and Time:", currentDate.toLocaleString());

var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds(); 
var milliseconds = currentDate.getMilliseconds();

console.log("\nDate Components:");
console.log(" Year:", year);
console.log(" Month:", month + 1);
console.log(" Day:", day);
console.log(" Hours:", hours);
console.log(" Minutes:", minutes);
console.log(" Seconds:", seconds);
console.log(" Milliseconds:", milliseconds);

var dayOfWeek = currentDate.getDay();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("\nCurrent Day of the Week:", daysOfWeek[dayOfWeek]);

currentDate.setFullYear(2023);
currentDate.setMonth(11);
currentDate.setDate(25);
console.log("\nUpdated Date:", currentDate.toLocaleString());

var formattedDate = currentDate.toDateString();
console.log("\nFormatted Date:", formattedDate);

var unixTime = currentDate.getTime();
console.log("\nUnix Time:", unixTime);

currentDate.setHours(currentDate.getHours() + 3);
console.log("\nUpdated Date after Adding 3 hours:", currentDate.toLocaleString());

var futureDate = new Date("2024-12-31");
var differenceInMilliseconds = futureDate - currentDate;
var differenceInSeconds = differenceInMilliseconds / 1000;
var differenceInMinutes = differenceInSeconds / 60;
var differenceInHours = differenceInMinutes / 60;
var differenceInDays = differenceInHours / 24;
console.log("\nDifference in Days:", differenceInDays.toFixed(2));