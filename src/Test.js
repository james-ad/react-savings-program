const findPercentage = (a, b) => {
  // 1. Take in two integers. A dollar amount, and a number between 1 and 100 indicating a percentage of the dollar amount.
  return (a * b * 0.01).toFixed();
  // 2. Multiply the the two numbers, and multiply the product by 0.01 (then toFixed).
  // 3. Return the result.
};

// Make a function that takes the above function
const percentageTester = func => {
  if (
    func ===
    function(a, b) {
      return (a * b * 0.01).toFixed();
    }
  ) {
    console.log("Hurray! It Works!");
  }
  console.log("Waa Waa Waa, Bitch I'm Lil' Baby");
};

percentageTester(findPercentage);

// Keep working on this
