const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to generate grade based on marks
function generateGrade() {
  rl.question("Enter student marks (0-100): ", function(marks) {
    marks = parseInt(marks); // Convert input to integer
    
    if (marks >= 0 && marks <= 100) {
      let grade;
      if (marks >= 80) {
        grade = 'A';
      } else if (marks >= 60) {
        grade = 'B';
      } else if (marks >= 50) {
        grade = 'C';
      } else if (marks >= 40) {
        grade = 'D';
      } else {
        grade = 'E';
      }

      console.log(`The grade is: ${grade}`);
    } else {
      console.log("Invalid input. Please enter a value between 0 and 100.");
    }

    rl.close(); // Close the readline interface
  });
}

// Call the function to generate grade
generateGrade();
