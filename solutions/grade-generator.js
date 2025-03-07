// Function to validate and map student marks to grades
function generateGrade() {
    // Prompt the user for input
    const marks = prompt("Enter student marks (0-100):");
  
    // Validate input: ensure it's a number and within the valid range (0-100)
    if (isNaN(marks) || marks < 0 || marks > 100) {
      console.log("Invalid input. Please enter a number between 0 and 100.");
      return; // Exit if the input is invalid
    }
  
    // Convert input to a number
    const grade = parseInt(marks);
  
    // Determine grade based on the given ranges
    let gradeLetter;
    if (grade >= 80) {
      gradeLetter = "A"; // Marks above or equal to 80
    } else if (grade >= 60) {
      gradeLetter = "B"; // Marks between 60 and 79
    } else if (grade >= 50) {
      gradeLetter = "C"; // Marks between 50 and 59
    } else if (grade >= 40) {
      gradeLetter = "D"; // Marks between 40 and 49
    } else {
      gradeLetter = "E"; // Marks below 40
    }
  
    // Output the grade
    console.log(`Student Grade: ${gradeLetter}`);
  }
  
  // Call the function to prompt for the student's grade
  generateGrade();
  