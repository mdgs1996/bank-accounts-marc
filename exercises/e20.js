
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let result = [];
  let arr1_containsA = [];
  let arr2_containsNotA = [];

for (const name of array) {
  let nameContainsA = false;

  for (const chr of name) {
    if (chr.toLowerCase() == 'a') {
      nameContainsA = true;
    }
  }
  
  if (nameContainsA) {
    arr1_containsA.push(name);
  } else {
    arr2_containsNotA.push(name);
  }
}

  result.push(arr1_containsA, arr2_containsNotA);

  return result;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
