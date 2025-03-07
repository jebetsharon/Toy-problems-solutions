const readline = require('readline');

// Create a readline interface to get user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkSpeed(speed) {
  const speedLimit = 70;
  const demeritPointsPerKmOver = 5;
  const maxDemeritPoints = 12;

  // Check if the speed is less than 70, and print "Ok"
  if (speed < speedLimit) {
    console.log("Ok");
  } else {
    // Calculate demerit points for speed over the limit
    const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerKmOver);
    console.log(`Points: ${demeritPoints}`);
    
    // Check if the demerit points exceed the limit
    if (demeritPoints > maxDemeritPoints) {
      console.log("License suspended");
    }
  }
}

// Ask the user to input the speed
rl.question("Enter the speed of the car: ", function(speed) {
  checkSpeed(parseInt(speed, 10));
  rl.close(); // Close the readline interface
});
