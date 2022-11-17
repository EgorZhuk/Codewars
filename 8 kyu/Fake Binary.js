// https://www.codewars.com/kata/57eae65a4321032ce000002d

// 8 kyu
// Fake Binary

// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let y = x.split('');
  for (let i=0; i<=y.length; i++){
    if (y[i]>=5){
      y[i]=1;
    } else if (y[i]<5){
      y[i]=0;
    };
  }
  return y.join('');
}