console.log("\nName: Ankit Patil\nEnrollment No.: 202203103510124\n");

let student = { name : "AMAN GUPTA", sclass : "VI", rollno : 12 };

console.log("Before :")
console.log(student)

delete student.name

student.sclass = "V"

console.log("After :")
console.log(student)