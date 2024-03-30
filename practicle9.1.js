console.log("\nName: Ankit Patil\nEnrollment No.: 202203103510124\n");

console.log("\nPracticle 9 (A): Write a demonstrative JavaScript for Map, WeakMap, and Set\n\n");

console.log("1. Map Example:\n");
let myMap = new Map();
myMap.set("name", "RANVIJAY");
myMap.set("age", 32);
myMap.set("gender", "Σ MALE");
myMap.set("city", "PUNJAB");
myMap.set("country", "INDIA");
myMap.set("occupation", "ENTREPRENEUR");
myMap.set("hobbies", "GYM, SHOOTING");
myMap.set("education", "PHD");
myMap.set("income", "∞");

console.log("Name:", myMap.get("name"));
console.log("Age:", myMap.get("age"));
console.log("Gender:", myMap.get("gender"));

console.log("Is 'name' present?", myMap.has("name"));
console.log("Is 'address' present?", myMap.has("address"));

myMap.delete("age");

console.log("Iterating over Map:");
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

console.log("\n2. WeakMap Example:\n");
let myWeakMap = new WeakMap();
let key1 = { id: 1 };
let key2 = { id: 2 };
let key3 = { id: 3 };
let key4 = { id: 4 };

myWeakMap.set(key1, "Value associated with key1");
myWeakMap.set(key2, "Value associated with key2");
myWeakMap.set(key3, "Value associated with key3");
myWeakMap.set(key4, "Value associated with key4");

console.log("Value for key1:", myWeakMap.get(key1));
console.log("Value for key2:", myWeakMap.get(key2));
console.log("Is key1 present?", myWeakMap.has(key1));

myWeakMap.delete(key2);

console.log("\n3. Set Example:\n");
let mySet = new Set();
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
mySet.add("mango");
mySet.add("kiwi");
mySet.add("apple");

console.log("Is 'apple' present?", mySet.has("apple"));
console.log("Is 'grape' present?", mySet.has("grape"));

mySet.delete("banana");

console.log("Iterating over Set:");
mySet.forEach((value) => {
  console.log(value);
});