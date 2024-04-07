// Function to calculate the grade based on the marks obtained
function calculateGrade(marks) {
    if (marks > 79) {
        return "A"; // Return 'A' if marks are greater than 79
    } else if (marks >= 60 && marks <= 79) {
        return "B"; // Return 'B' if marks are between 60 and 79 (inclusive)
    } else if (marks >= 49 && marks <= 59) {
        return "C"; // Return 'C' if marks are between 49 and 59 (inclusive)
    } else if (marks >= 40 && marks <= 49) {
        return "D"; // Return 'D' if marks are between 40 and 49 (inclusive)
    } else {
        return "E"; // Return 'E' if marks are below 40
    }
}

// Main function to execute the program
function main() {
    // Infinite loop until valid input is provided
    while (true) {
        let input = prompt("Enter student marks (0-100):"); // Prompt user for input
        let marks = parseFloat(input); // Convert input to a floating-point number

        // Check if input is a valid number within the range of 0 to 100
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            let grade = calculateGrade(marks); // Calculate grade based on input marks
            console.log("Grade:", grade); // Display the calculated grade
            break; // Exit the loop since valid input is provided
        } else {
            console.log("Marks should be between 0 and 100. Try again."); // Error message for invalid input
        }
    }
}

// Call the main function to start the program
main();
