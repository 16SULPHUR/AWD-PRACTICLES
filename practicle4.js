// Practicle 4: Write a JavaScript to create a cart contains items of categories like groceries, apparels, accessories and gadgets. Each category offers discounts 10%, 20%, 5% and 50% discounts. Apply discount on the times present in the cart and generate a Uinal bill. [Hint: Use objects containing key-value pair]

// Name: Ankit Patil
// Enrollment No: 202203103510124


console.log("\n=> Name: Ankit Patil\n=> Enrollment No: 202203103510124\n")

const discounts = {
    groceries: 0.1,
    apparels: 0.2,
    accessories: 0.05,
    gadgets: 0.5,
  };
  
  const cart = [
    { category: "groceries", item: "Bread", price: 2.5, quantity: 2 },
    { category: "apparels", item: "T-Shirt", price: 15.0, quantity: 1 },
    { category: "accessories", item: "Watch", price: 50.0, quantity: 1 },
    { category: "gadgets", item: "Smartphone", price: 500.0, quantity: 1 },
    { category: "groceries", item: "Milk", price: 3.0, quantity: 1 },
    { category: "apparels", item: "Jeans", price: 30.0, quantity: 1 },
    { category: "accessories", item: "Sunglasses", price: 25.0, quantity: 1 },
    { category: "gadgets", item: "Laptop", price: 1000.0, quantity: 1 },
  ];
  
  function calculateDiscountedPrice(item) {
    if (discounts.hasOwnProperty(item.category)) {
      return item.price * (1 - discounts[item.category]);
    } else {
      return item.price;
    }
  }
  
  let totalDiscountedPrice = 0;
  
  console.log("+------------------------------------------------------------+");
  console.log("|                         D-Mart                             |");
  console.log("+------------------------------------------------------------+");
  console.log("| Item                | Category | Actual Price |     Price  |");
  console.log("+------------------------------------------------------------+");
  
  cart.forEach((item) => {
    const discountedPrice = calculateDiscountedPrice(item);
    const actualPrice = `$${item.price.toFixed(2)}`.padStart(12);
    const itemName = item.item.padEnd(20);
    const category = item.category.padEnd(9);
    const discountedPriceFormatted = `$${discountedPrice.toFixed(2)}`.padStart(12);
    console.log(
      `| ${itemName}  ${category}  ${actualPrice} ${discountedPriceFormatted} |`
    );
    totalDiscountedPrice += discountedPrice * item.quantity;
  });
  
  console.log("+------------------------------------------------------------+");
  console.log(
    `| Total Discounted Price: $${totalDiscountedPrice.toFixed(2)} \t\t\t     |`
  );
  console.log("+------------------------------------------------------------+");
