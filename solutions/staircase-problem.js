// Function to generate the staircase pattern
function staircase(n) {
    for (let i = 1; i <= n; i++) {
      console.log('#'.repeat(i));
    }
  }
  
  // Ask the user for the number of steps in the staircase
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Enter the number of steps: ", function(steps) {
    staircase(parseInt(steps));
    rl.close();
  });
  