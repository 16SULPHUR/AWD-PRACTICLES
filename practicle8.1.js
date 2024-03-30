console.log("\nName: Ankit Patil\nEnrollment No.: 202203103510124\n");
console.log(
  "Practicle 8 (A1): Write a demonstrative JavaScript for Function Methods\n"
);
function calculateArea(width, height) {
  return width * height;
}

console.log("[1] Using call method:");
console.log(`Result using 'call' method: ${calculateArea.call(null, 5, 10)}`);

console.log("\n[2] Using apply method:");
console.log(
  `Result using 'apply' method: ${calculateArea.apply(null, [3, 7])}`
);

console.log("\n[3] Using bind method:");
var boundCalculateArea = calculateArea.bind(null, 4);
console.log(`Result using 'bind' method: ${boundCalculateArea(6)}`);

console.log("\n[4] Using toString method:\n");
console.log(`Function as string:\n\n${calculateArea.toString()}`);

console.log("\n[5] Using length property:");
console.log(`Number of expected arguments: ${calculateArea.length}`);

console.log("\n=================================================");

console.log("\nName: Ankit Patil\nEnrollment No.: 202203103510124\n");

console.log("\nPracticle 8 (A2): Write a demonstrative JavaScript for Function Internals\n\n");

function multiply(a, b) {
  return a * b;
}

console.log("Function Name:", multiply.name);
console.log("Function Parameters:", multiply.length);

console.log("Is Constructor:", multiply.prototype.constructor === multiply);

var instance = new multiply();
console.log("Is instance of multiply:", instance instanceof multiply);

console.log("Function Prototype:", multiply.prototype);