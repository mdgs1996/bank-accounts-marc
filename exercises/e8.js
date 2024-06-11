
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let result = [];

  let highestBalance = null;

  for (const account of array) {
    let currBalance = account.balance;
    
    if (currBalance > 0) {
      if (array.indexOf(account) == 0) {
        highestBalance = currBalance;
        result.push(account);
      } else if (currBalance > highestBalance) {
        result[0] = account;
        highestBalance = currBalance;
      }
    }
  }

  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
