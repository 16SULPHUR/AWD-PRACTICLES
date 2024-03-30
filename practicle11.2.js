console.log("\nName: Ankit Patil\nEnrollment No.: 202203103510124\n");
class BubbleSort {

    sort(names) {
        const len = names.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (names[j].localeCompare(names[j + 1], 'en', { sensitivity: 'base' }) > 0) {
                    // Swap names if they are in the wrong order
                    let temp = names[j];
                    names[j] = names[j + 1];
                    names[j + 1] = temp;
                }
            }
        }
        return names;
    }
}

const bubbleSort = new BubbleSort();
const unsortedNames = ["Rahul", "Priya", "Suresh", "Amit", "Kavita", "Vikram"];
console.log("Unsorted names:", unsortedNames);
const sortedNames = bubbleSort.sort(unsortedNames);
console.log("Sorted names:", sortedNames);