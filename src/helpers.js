// Add commas to a number
const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Render percentage of a given number
function convertPercentage(n, percentageValue) {
  return percentageValue * 0.01 * n;
}
