console.log("\nName: Ankit Patil\nEnrollment No.: 202203103510124\n");

function counter() {
    let count = 0;

    function increment() {
      count++;
      console.log("Current count:", count);
    }

    return increment;
  }

  let counter2 = counter();

  console.log("Counter:");
  counter2();
  counter2();
  counter2();