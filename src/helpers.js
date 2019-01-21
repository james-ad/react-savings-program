// Add commas to a number
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Render percentage of a given number
export function convertPercentage(num, percentage) {
  return (num * percentage * 0.01).toFixed(2);
}
