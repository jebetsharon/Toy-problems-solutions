// Function to check speed and calculate demerit points
function speedDetector() {
    // Prompt the user to enter the speed of the car
    const speed = parseInt(prompt("Enter speed of the car:"));
  
    // Validate the input to ensure it's a valid number
    if (isNaN(speed) || speed < 0) {
      console.log("Invalid input. Please enter a valid speed.");
      return; // Exit if the input is invalid
    }
  
    // Speed limit is 70 km/h
    const speedLimit = 70;
  
    // Check if the speed is within the limit
    if (speed <= speedLimit) {
      console.log("Speed is OK");
    } else {
      // Calculate the number of demerit points for each 5 km/h over the speed limit
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
  
      // If the demerit points exceed 12, suspend the license
      if (demeritPoints > 12) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  // Call the function to start the speed detection process
  speedDetector();
  