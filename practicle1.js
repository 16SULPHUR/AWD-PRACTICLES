// Practicle 1: Write a JavaScript to demonstrate properties and methods of String reference Type.

// Name: Ankit Patil
// Enrollment No: 202203103510124

console.log("\n=> Name: Ankit Patil\n=> Enrollment No: 202203103510124\n")

let str = "My First Practical!";

console.log(`1. Length of string: ${str.length}\n`);

console.log(`2. Uppercase string: ${str.toUpperCase()}`);
console.log(`3. Lowercase string: ${str.toLowerCase()}\n`);

console.log(`4. Index of 'Practical': ${str.indexOf("Practical")}`);
console.log(`5. Substring (5-10): ${str.substring(5, 10)}`);
console.log(`6. Searching For 'First': ${str.search("First")}`);
console.log(`7. Index of 'y': ${str.indexOf("y")}`);
console.log(`8. Character at position 3: ${str.charAt(3)}\n`);

let anotherString = " in NodeJS";
let combinedString = str.concat(anotherString);
console.log(`9. Combined String: ${combinedString}\n`);

let replacedString = str.replace("Practical", "Program");
console.log(`10. Replaced String: ${replacedString}\n`);

let splitArray = str.split(" ");
console.log(`11. Split Array: ${splitArray}\n`);

console.log(`12. Starts with 'My': ${str.startsWith("My")}`);
console.log(`13. Ends with 'Practical!': ${str.endsWith("Practical!")}`);