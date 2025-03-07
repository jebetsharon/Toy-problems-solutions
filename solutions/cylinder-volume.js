// Function to calculate the volume of a cylinder
function calculateVolume(radius, height) {
    const pi = Math.PI;
    const volume = pi * Math.pow(radius, 2) * height;
    console.log(`The volume of the cylinder is: ${volume} cubic units.`);
  }
  
  // Ask for the radius and height
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Enter the radius of the cylinder: ", function(radius) {
    rl.question("Enter the height of the cylinder: ", function(height) {
      calculateVolume(parseFloat(radius), parseFloat(height));
      rl.close();
    });
  });
  