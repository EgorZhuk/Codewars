// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// 6 kyu
// Find The Parity Outlier

// DESCRIPTION:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i <= integers.length; i++) {
    if (integers[i] % 2 == 0) {
      count1++;
    } else if (integers[i] % 2 != 0){
      count2++;
    }
  }

  console.log(count1, count2);

  if (count1 >= count2) {
    for (let j = 0; j <= integers.length; j++) {
      if (integers[j] % 2 != 0) {
        return integers[j];
      }
    }
  } else if (count1 <= count2) {
    for (let k = 0; k <= integers.length; k++) {
      if (integers[k] % 2 == 0) {
        return integers[k];
      }
    }
  }
}