// https://www.codewars.com/kata/513e08acc600c94f01000001

// 5 kyu
// RGB To Hex Conversion

// DESCRIPTION:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  if (r<0){r = "00"} else if (r>255){r = "FF"};

  if (g<0){g = "00"} else if (g>255){g = "FF"};

  if (b<0){b = "00"} else if (b>255){b = "FF"}

  function ColorToHex(color) {
  var hex = color.toString(16);
  return hex.length == 1 ? "0" + hex.toUpperCase() : hex.toUpperCase();
}
  return ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
}