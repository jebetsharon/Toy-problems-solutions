const readline = require('readline');

// Create a readline interface to get user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate the net salary
function calculateNetSalary(grossSalary) {
  const personalRelief = 2400; // Ksh
  const nhifRate = 2.75 / 100; // 2.75% of salary
  const nssfRate = 6 / 100; // 6% of salary

  // PAYE brackets (adjust based on your country’s tax rate and bands)
  let paye = 0;
  if (grossSalary <= 24000) {
    paye = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    paye = grossSalary * 0.25;
  } else if (grossSalary <= 500000) {
    paye = grossSalary * 0.3;
  } else {
    paye = grossSalary * 0.35;
  }

  // NHIF Deduction
  const nhif = grossSalary * nhifRate;

  // NSSF Deduction
  const nssf = grossSalary * nssfRate;

  // Calculate net salary
  const totalDeductions = paye + nhif + nssf;
  const netSalary = grossSalary - totalDeductions + personalRelief;

  console.log(`Gross Salary: Ksh ${grossSalary}`);
  console.log(`PAYE: Ksh ${paye}`);
  console.log(`NHIF Deduction: Ksh ${nhif}`);
  console.log(`NSSF Deduction: Ksh ${nssf}`);
  console.log(`Net Salary: Ksh ${netSalary}`);
}

// Ask the user to input the gross salary
rl.question("Enter your gross salary: ", function(grossSalary) {
  calculateNetSalary(parseFloat(grossSalary));
  rl.close(); // Close the readline interface
});
