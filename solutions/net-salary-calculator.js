// Constants for tax rates and deductions
const PAYE_TAX_BRACKETS = [
    { min: 0, max: 24000, rate: 0.1 }, // 10%
    { min: 24001, max: 32333, rate: 0.25 }, // 25%
    { min: 32334, max: 500000, rate: 0.3 }, // 30%
    { min: 500001, max: 800000, rate: 0.325 }, // 32.5%
    { min: 800001, max: Infinity, rate: 0.35 } // 35%
  ];
  
  const PERSONAL_RELIEF = 2400; // Monthly personal relief in Ksh
  const SHIF_RATE = 0.0275; // SHIF 2.75%
  const NSSF_TIER_I_LIMIT = 8000; // Up to Ksh 8,000 for Tier I
  const NSSF_TIER_II_LIMIT = 72000; // Up to Ksh 72,000 for Tier II
  const HOUSING_LEVY_RATE = 0.015; // Housing levy 1.5%
  
  // Function to calculate PAYE (Income tax)
  function calculatePAYE(taxablePay) {
    let tax = 0;
    
    PAYE_TAX_BRACKETS.forEach(bracket => {
      if (taxablePay > bracket.min) {
        const taxableAmount = Math.min(taxablePay, bracket.max) - bracket.min;
        tax += taxableAmount * bracket.rate;
      }
    });
  
    return tax;
  }
  
  // Function to calculate NSSF contributions
  function calculateNSSF(grossSalary) {
    let tierI = Math.min(grossSalary, NSSF_TIER_I_LIMIT) * 0.06;
    let tierII = Math.max(0, grossSalary - NSSF_TIER_I_LIMIT) * 0.06;
  
    return tierI + tierII;
  }
  
  // Function to calculate SHIF contributions (Social Health Insurance Fund)
  function calculateSHIF(grossSalary) {
    return grossSalary * SHIF_RATE;
  }
  
  // Function to calculate Housing Levy
  function calculateHousingLevy(grossSalary) {
    return grossSalary * HOUSING_LEVY_RATE;
  }
  
  // Function to calculate Net Salary
  function calculateNetSalary(grossSalary) {
    // 1. Calculate PAYE tax
    const paye = calculatePAYE(grossSalary);
  
    // 2. Calculate NSSF deductions
    const nssf = calculateNSSF(grossSalary);
  
    // 3. Calculate SHIF contributions
    const shif = calculateSHIF(grossSalary);
  
    // 4. Calculate Housing Levy
    const housingLevy = calculateHousingLevy(grossSalary);
  
    // 5. Subtract all deductions from the gross salary
    const totalDeductions = paye + nssf + shif + housingLevy;
  
    // 6. Subtract the personal relief (deductible from PAYE)
    const payeAfterRelief = Math.max(paye - PERSONAL_RELIEF, 0);
  
    // 7. Calculate the net salary
    const netSalary = grossSalary - totalDeductions + PERSONAL_RELIEF;
  
    // Return an object with all the deductions and final net salary
    return {
      grossSalary,
      paye: payeAfterRelief,
      nssf,
      shif,
      housingLevy,
      totalDeductions,
      netSalary
    };
  }
  
  // Example usage
  const grossSalary = 100000; // Example salary input
  
  const salaryBreakdown = calculateNetSalary(grossSalary);
  
  console.log("Salary Breakdown:");
  console.log(`Gross Salary: Ksh ${salaryBreakdown.grossSalary}`);
  console.log(`PAYE (Tax): Ksh ${salaryBreakdown.paye}`);
  console.log(`NSSF Contribution: Ksh ${salaryBreakdown.nssf}`);
  console.log(`SHIF Contribution: Ksh ${salaryBreakdown.shif}`);
  console.log(`Housing Levy: Ksh ${salaryBreakdown.housingLevy}`);
  console.log(`Total Deductions: Ksh ${salaryBreakdown.totalDeductions}`);
  console.log(`Net Salary: Ksh ${salaryBreakdown.netSalary}`);
  