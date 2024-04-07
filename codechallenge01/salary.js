// Function to calculate tax based on basic salary
function calculateTax(basicSalary) {
    // Tax brackets with corresponding rates
    const taxBrackets = [
        { min: 0, max: 24587, rate: 0.1 },
        { min: 24588, max: 36278, rate: 0.15 },
        { min: 36279, max: 47869, rate: 0.2 },
        { min: 47870, max: 59460, rate: 0.25 },
        { min: 59461, max: Infinity, rate: 0.3 } // Infinity represents upper limit
    ];

    let tax = 0;
    // Loop through each tax bracket
    for (const bracket of taxBrackets) {
        // If basic salary falls within the bracket
        if (basicSalary > bracket.min) {
            // Calculate taxable income within the bracket
            const taxableIncomeInBracket = Math.min(basicSalary, bracket.max) - bracket.min;
            // Calculate tax for this bracket and add to total tax
            tax += taxableIncomeInBracket * bracket.rate;
        }
    }
    return tax;
}

// Function to calculate NHIF (National Hospital Insurance Fund) contribution based on basic salary
function calculateNHIF(basicSalary) {
    // NHIF brackets with corresponding contribution amounts
    const nhifBrackets = [
        { min: 0, max: 5999, amount: 150 },
        { min: 6000, max: 7999, amount: 300 },
        // Add more brackets here as per the provided link or requirements
    ];

    // Loop through each NHIF bracket
    for (const bracket of nhifBrackets) {
        // If basic salary falls within the bracket
        if (basicSalary >= bracket.min && basicSalary <= bracket.max) {
            // Return NHIF contribution amount for this bracket
            return bracket.amount;
        }
    }
}

// Function to calculate NSSF (National Social Security Fund) deduction based on basic salary
function calculateNSSF(basicSalary) {
    // NSSF contribution rate
    const nssfRate = 0.06;
    // Calculate NSSF deduction, capped at 6000
    const nssfDeduction = Math.min(basicSalary * nssfRate, 6000);
    return nssfDeduction;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Calculate tax, NHIF, and NSSF deductions
    const tax = calculateTax(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    // Calculate gross salary including benefits
    const grossSalary = basicSalary + benefits;
    // Calculate total deductions
    const deductions = tax + nhif + nssf;
    // Calculate net salary after deductions
    const netSalary = grossSalary - deductions;
    return netSalary;
}

// Function to prompt user for input and calculate net salary
function main() {
    // Prompt user for basic salary and benefits
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
    // Calculate net salary
    const netSalary = calculateNetSalary(basicSalary, benefits);
    // Display net salary
    console.log("Net Salary:", netSalary);
}

// Call the main function to start the program
main();
