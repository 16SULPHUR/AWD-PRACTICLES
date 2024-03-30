// Practicle 2: Write a JavaScript to demonstrate properties and methods of Array Collection Reference Type.

// Name: Ankit Patil
// Enrollment No: 202203103510124

console.log("\n=> Name: Ankit Patil\n=> Enrollment No: 202203103510124\n")

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  console.log("\n1. Array length:", months.length);
  console.log("\n2. Original array:", months);
  
  months.push("13th Month");
  console.log("\n3. Array after pushing '13th Month':", months);
  
  let removedMonth = months.pop();
  console.log("\n4. Array after popping:", months);
  console.log(" Removed Month:", removedMonth);
  
  let shiftedMonth = months.shift();
  console.log("\n5. Array after shifting:", months);
  console.log(" Shifted Month:", shiftedMonth);
  
  months.unshift("January");
  console.log("\n6. Array after unshifting 'January':", months);
  
  months.splice(3, 1, 'Spliced Month');
  console.log("\n7. Array after splicing at index 3:", months);
  
  let slicedmonths = months.slice(1, 3);
  console.log("\n8. Sliced array:", slicedmonths);
  
  console.log("\n9. Index of 'February':", months.indexOf('February'));
  
  let moremonths = ['14th Month', '15th Month'];
  let combinedArray = months.concat(moremonths);
  console.log("\n10. Combined array:", combinedArray);
  
  console.log("\n11. Printing each element of array:");
  months.forEach(function(Month, index) {
    console.log(" ",index + 1,"->", Month);
  });
  
  let mappedArray = months.map(function(Month) {
    return Month.toUpperCase();
  });
  console.log("\n12. Mapped array (uppercase):", mappedArray);
  
  let filteredArray = months.filter(function(Month) {
    return Month.length > 6;
  });
  console.log("\n13. Filtered array (length > 6):", filteredArray);
  
  let allLongNames = months.every(function(Month) {
    return Month.length > 3;
  });
  console.log("\n14. Are all months names longer than 3 characters?", allLongNames);
  
  let anyLongNames = months.some(function(Month) {
    return Month.length > 6;
  });
  console.log("\n15. Are there any months names longer than 6 characters?", anyLongNames);
  
  let joinedString = months.join(', ');
  console.log("\n16. Joined string:", joinedString);
  
  months.reverse();
  console.log("\n17. Reversed array:", months);
  
  months.sort();
  console.log("\n18. Sorted array:", months);
  
  console.log("\n19. Does array include 'March'?", months.includes('March'));
  
  let foundMonth = months.find(function(Month) {
    return Month.startsWith('O');
  });
  console.log("\n20. First Month starting with 'O':", foundMonth);
  
  let foundIndex = months.findIndex(function(Month) {
    return Month.startsWith('O');
  });
  console.log("\n21. Index of first Month starting with 'O':", foundIndex);
  
  let newArray = new Array(5);
  newArray.fill('Month', 1, 8);
  console.log("\n22. Filled array:", newArray);
  
  let totalLength = months.reduce(function(total, Month) {
    return total + Month.length;
  }, 0);
  console.log("\n23. Total length of all Month names:", totalLength);
  
  let nestedArray = [1, 2, [3, 4, [5, 6]]];
  let flatArray = nestedArray.flat(2);
  console.log("\n24. Nested array:", nestedArray);
  console.log(" Flattened array:", flatArray);