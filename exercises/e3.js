
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
  let sum = 0;
  
  for (const num of array) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    sum += num;
  } 

  return  (sum / array.length)
}


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  // Your code goes here...
  let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ,"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let strArr = str.split("");
  console.log(`String Array: ${strArr}`);
  
  let sum = 0;
  for (const chr of strArr) {
    console.log(`Character: ${chr.toUpperCase()}`);
    if (!alphabet.includes(chr.toUpperCase())) {
      sum += Number(chr); // https://www.geeksforgeeks.org/convert-a-string-to-an-integer-in-javascript/
    }
  }

  return sum;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
