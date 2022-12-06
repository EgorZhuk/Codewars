// https://www.codewars.com/kata/5715eaedb436cf5606000381

// 8 kyu
// Sum of positive

// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (element >= 0) {
      sum += element;
    }
  });
  return sum;
}
