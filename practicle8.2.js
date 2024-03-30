console.log("\nName: Ankit Patil\nEnrollment No.: 202203103510124\n")

console.log("\nPracticle 8 (B): Write a demonstrative JavaScript for Function Internals\n\n")


function add() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
    } else {
      throw new Error("Invalid argument type. Only numbers are allowed.");
    }
  }

  return sum;
}

console.log(add(2, 3));
console.log(add(2, 3, 4));
console.log(add(1, 2, 3, 4, 5));
console.log(add(1.5, 2.5, 3.5));
console.log(add(1, 2, "3"));